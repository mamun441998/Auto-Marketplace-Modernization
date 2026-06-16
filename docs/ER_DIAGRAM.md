Vehicle
│
├── hasMany VehicleImages
├── belongsTo Dealer
├── belongsTo InventorySource
├── hasMany VehicleFeatures
└── belongsTo VehicleLocation

Dealer
│
├── hasMany Vehicles
└── hasMany DealerContacts

InventorySource
│
└── hasMany Vehicles