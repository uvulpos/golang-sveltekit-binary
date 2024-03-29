package service

import (
	"errors"

	"github.com/go-sqlx/sqlx"
)

func (h *UserSvc) UpdatePasswordByUsername(tx *sqlx.Tx, userID, newPassword string) error {
	if newPassword == "" {
		return errors.New("password cannot be empty")
	}

	var txStarted bool = false
	if tx == nil {
		tx, txErr := h.storage.CreateTransaction()
		if txErr != nil {
			return txErr
		}
		txStarted = true
		defer tx.Rollback()
	}

	user, userErr := h.GetUserByUUID(tx, userID)
	if userErr != nil {
		return userErr
	}

	if user.AuthSource != "basic" {
		return errors.New("only basic authenticated users can change their password")
	}

	passwordChangeErr := h.storage.SetPasswordByID(tx, user.Id.String(), newPassword)
	if passwordChangeErr != nil {
		return passwordChangeErr
	}

	if txStarted && tx != nil {
		commitErr := tx.Commit()
		if commitErr != nil {
			return commitErr
		}
	}

	return nil
}
