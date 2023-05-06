import express from "express";
import { addToPlaylist, changePassword, deleteMyProfile, deleteUser, forgetPassword, getAllUsers, getMyProfile, login, logout, register, removeFromPlaylist, resetPassword, updateProfile, updateprofilepicture, updateUserRole } from "../controllers/userController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";


const router = express.Router();

router.route("/register").post(singleUpload,register);

router.route("/login").post(login);

router.route("/logout").get(logout);

router.route("/me").get(isAuthenticated,getMyProfile);

// Delete my profile
router.route("/me").delete(isAuthenticated, deleteMyProfile);

router.route("/changepassword").put(isAuthenticated,changePassword);

router.route("/updateprofile").put(isAuthenticated,updateProfile);

router.route("/updateprofilepicture").put(isAuthenticated,singleUpload,updateprofilepicture);

// ForgetPassword
router.route("/forgetpassword").post(forgetPassword);
// ResetPassword
router.route("/resetpassword/:token").put(resetPassword);router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);

// RemoveFromPlaylist
router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);

// Admin Routes
router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAllUsers);

router
  .route("/admin/user/:id")
  .put(isAuthenticated, authorizeAdmin, updateUserRole)
  .delete(isAuthenticated, authorizeAdmin, deleteUser);
// // delete lecture
// export default router;





// delete lecture
export default router;