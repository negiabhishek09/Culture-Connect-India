import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  slug: string;
  description: string;
  image: string;
  price: number;
  originalPrice: number;
  tag: string;
  rating: number;
  soldCount: number;
  stock: number;
  isActive: boolean;
  isFeatured: boolean;
  businessId: mongoose.Types.ObjectId;
  categoryId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, trim: true },

    // ✅ unique hi enough hai
    slug: { type: String, required: true, unique: true, lowercase: true },

    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    originalPrice: { type: Number, required: true, min: 0 },

    tag: {
      type: String,
      required: true,
      enum: ['Bestseller', 'Premium', 'Handmade', 'Organic', 'New', 'Sale'],
    },

    rating: { type: Number, default: 0, min: 0, max: 5 },
    soldCount: { type: Number, default: 0 },
    stock: { type: Number, default: 100, min: 0 },

    isActive: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },

    businessId: { type: Schema.Types.ObjectId, ref: 'Business', required: true },
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_doc, ret: any) => {
        delete ret.__v;
        return ret;
      },
    },
  }
);

// ✅ KEEP useful indexes
ProductSchema.index({ businessId: 1 });
ProductSchema.index({ categoryId: 1 });
ProductSchema.index({ isFeatured: -1, soldCount: -1 });
ProductSchema.index({ price: 1 });
ProductSchema.index({ isActive: 1, isFeatured: -1 });



export const Product = mongoose.model<IProduct>('Product', ProductSchema);