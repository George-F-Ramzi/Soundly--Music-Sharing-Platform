"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var JWt_1 = require("../lib/JWt");
var multer_1 = __importDefault(require("../lib/multer"));
var upload_1 = __importDefault(require("../controllers/upload"));
var home_page_data_1 = __importDefault(require("../controllers/home_page_data"));
var follow_1 = __importDefault(require("../controllers/follow"));
var unfollow_1 = __importDefault(require("../controllers/unfollow"));
var like_song_1 = __importDefault(require("../controllers/like_song"));
var dislike_song_1 = __importDefault(require("../controllers/dislike_song"));
var comment_1 = __importDefault(require("../controllers/comment"));
var get_comments_1 = __importDefault(require("../controllers/get_comments"));
var serach_1 = __importDefault(require("../controllers/serach"));
var uploaded_songs_1 = __importDefault(require("../controllers/uploaded_songs"));
var liked_songs_1 = __importDefault(require("../controllers/liked_songs."));
var is_liked_1 = __importDefault(require("../controllers/is_liked"));
var is_followed_1 = __importDefault(require("../controllers/is_followed"));
var me_1 = __importDefault(require("../controllers/me"));
var inbox_1 = __importDefault(require("../controllers/inbox"));
var Handler = express_1.default.Router();
Handler.route("/upload").post(JWt_1.JwtVerfiy, multer_1.default.fields([
    { name: "song_file", maxCount: 1 },
    { name: "cover_file", maxCount: 1 },
]), upload_1.default);
Handler.route("/home").get(JWt_1.JwtVerfiy, home_page_data_1.default);
Handler.route("/follow/:artist_id").post(JWt_1.JwtVerfiy, follow_1.default);
Handler.route("/unfollow/:artist_id").post(JWt_1.JwtVerfiy, unfollow_1.default);
Handler.route("/like/:song_id").post(JWt_1.JwtVerfiy, like_song_1.default);
Handler.route("/dislike/:song_id").post(JWt_1.JwtVerfiy, dislike_song_1.default);
Handler.route("/comment/:song_id").post(JWt_1.JwtVerfiy, comment_1.default);
Handler.route("/comments/:song_id").get(JWt_1.JwtVerfiy, get_comments_1.default);
Handler.route("/uploaded/:artist_id").get(JWt_1.JwtVerfiy, uploaded_songs_1.default);
Handler.route("/liked_songs").get(JWt_1.JwtVerfiy, liked_songs_1.default);
Handler.route("/search/:query").post(JWt_1.JwtVerfiy, serach_1.default);
Handler.route("/is_liked/:song_id").get(JWt_1.JwtVerfiy, is_liked_1.default);
Handler.route("/is_followed/:artist_id").get(JWt_1.JwtVerfiy, is_followed_1.default);
Handler.route("/me").get(JWt_1.JwtVerfiy, me_1.default);
Handler.route("/inbox").get(JWt_1.JwtVerfiy, inbox_1.default);
exports.default = Handler;
