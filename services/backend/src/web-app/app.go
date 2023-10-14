package webapp

import (
	"fmt"
	"io/fs"
	"log"
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/filesystem"
	"github.com/spf13/viper"

	"github.com/gofiber/swagger"
	_ "github.com/uvulpos/go-svelte/swagger-docs"

	"github.com/uvulpos/go-svelte/src/assets"
	dbHelper "github.com/uvulpos/go-svelte/src/helper/database"

	userHttp "github.com/uvulpos/go-svelte/src/resources/users/http"
	userService "github.com/uvulpos/go-svelte/src/resources/users/service"
	userStorage "github.com/uvulpos/go-svelte/src/resources/users/storage"
)

type App struct {
	UserHandler UserHandler
}

func NewApp() *App {

	dbConn := dbHelper.CreateDatabase()

	userStore := userStorage.NewUserStore(dbConn)
	userSvc := userService.NewUserSvc(userStore)
	userHandler := userHttp.NewUserHandler(userSvc)

	return &App{
		UserHandler: userHandler,
	}
}

func (a *App) RunApp(showFrontend, showSwagger bool, webserverPort int) {

	publicFS, err := fs.Sub(assets.SvelteFS, "frontend")
	if err != nil {
		log.Fatal(err)
	}

	router := fiber.New(fiber.Config{
		DisableStartupMessage: true,
		ErrorHandler: func(c *fiber.Ctx, err error) error {
			// for internal use you can print error to response
			// "Unexpected Error Occured " + "\n" + err.Error()
			return c.Status(fiber.StatusInternalServerError).SendString("Unexpected Error Occured")
		},
	})

	a.createRoutes(router)

	if viper.GetBool("show-swagger") {
		router.Get("/swagger/*", swagger.HandlerDefault)
	}

	if showFrontend {
		router.Use("/", filesystem.New(filesystem.Config{
			Root:         http.FS(publicFS),
			NotFoundFile: "index.html",
		}))
	}

	serverPort := fmt.Sprintf(":%d", webserverPort)
	log.Printf("server listens on %s\n", serverPort)
	router.Listen(serverPort)
}
