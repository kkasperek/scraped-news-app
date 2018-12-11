var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;
var ArticleSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        summary: {
            type: String,
        },
        link: {
            type: String,
            required: true
        },
        comment: {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    }
);

var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
