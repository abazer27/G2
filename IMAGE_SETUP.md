# Image Setup Guide

## Image Structure

Your project now supports both compressed and HD images with a modal viewer. Here's how it works:

### ImageSet Format
```typescript
interface ImageSet {
  compressed: string;  // Path to compressed/optimized image
  hd: string;          // Path to high-definition image
  alt?: string;        // Alt text for accessibility
}
```

### Usage in Project Data
```typescript
{
  heroImage: {
    compressed: "/images/projects/villa-hero-compressed.jpg",
    hd: "/images/projects/villa-hero-hd.jpg",
    alt: "Modern residential villa hero image"
  },
  thumbnailImage: {
    compressed: "/images/projects/villa-thumb-compressed.jpg", 
    hd: "/images/projects/villa-thumb-hd.jpg",
    alt: "Modern residential villa thumbnail"
  },
  images: [
    {
      compressed: "/images/projects/villa-1-compressed.jpg",
      hd: "/images/projects/villa-1-hd.jpg", 
      alt: "Modern villa exterior view"
    }
  ]
}
```

## Image Optimization Recommendations

### Compressed Images (for normal display)
- **Format**: WebP or JPEG
- **Quality**: 60-80%
- **Size**: 800-1200px width max
- **File size**: < 200KB ideally

### HD Images (for modal viewer)
- **Format**: WebP or high-quality JPEG
- **Quality**: 85-95%
- **Size**: 1920-3000px width
- **File size**: 500KB - 2MB max

## File Naming Convention

```
/public/images/projects/
├── villa-hero-compressed.jpg     (Hero image - compressed)
├── villa-hero-hd.jpg             (Hero image - HD)
├── villa-thumb-compressed.jpg    (Thumbnail - compressed)
├── villa-thumb-hd.jpg            (Thumbnail - HD)
├── villa-1-compressed.jpg        (Gallery image 1 - compressed)
├── villa-1-hd.jpg                (Gallery image 1 - HD)
└── ...
```

## Modal Features

- **Keyboard Navigation**: Arrow keys, Escape to close
- **Image Navigation**: Previous/Next buttons
- **Thumbnail Strip**: Quick navigation between images
- **Loading States**: Smooth loading animations
- **Image Counter**: Shows current position
- **Responsive**: Works on mobile and desktop
- **Accessibility**: Proper alt text support

## Implementation

1. **Regular Display**: Shows compressed images for fast loading
2. **Modal Viewer**: Loads HD images when user clicks
3. **Smooth Transitions**: Animated modal with loading states
4. **Gallery Navigation**: Users can navigate through all project images

The system automatically handles the loading of compressed images for normal display and switches to HD versions only when users open the modal, ensuring optimal performance and user experience.