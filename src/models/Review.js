import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "Tour",
     required: true,
    },
     username: {
     type: String,
     required: true,
    },

    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    }

  },
  { timestamps: true ,versionKey: false}
);

export default mongoose.model("Review", reviewSchema);
