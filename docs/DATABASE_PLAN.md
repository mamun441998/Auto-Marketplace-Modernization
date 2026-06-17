# Auto Marketplace Database Plan

## Modules

- Authentication
- Vehicles
- Vehicle Images
- Dealers
- Inventory Sources
- Inventory Sync
- Favorites
- Search
- SEO
- Blogs

---

## Authentication

Tables:

- users
- roles
- permissions

---

## Vehicle

Tables:

- vehicles
- vehicle_images
- vehicle_features
- vehicle_locations

---

## Dealers

Tables:

- dealers
- dealer_contacts

---

## Inventory

Tables:

- inventory_sources
- inventory_sync_logs

---

## Database Creation Order

### Priority 1 (Parent Tables)
- users
- roles
- permissions
- dealers
- inventory_sources

### Priority 2
- vehicles

### Priority 3
- vehicle_images
- vehicle_features
- favorites
- saved_searches

### Priority 4
- inventory_sync_logs
- blogs
- seo_pages
- notifications