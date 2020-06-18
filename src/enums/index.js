export const MenuType = new Map([
    ['Group', "Group"],
    ['Submenu', "Submenu"],
    ['Linkable', "Linkable"]
]);

// users 
// clients 
// mechanics 
// directions 
// permissions 
// vehicle 
// report 

// expired permissions 

// about 
// cookies 
// 404

export const Routes = new Map([
    ['Home', "/"],

    ['Vehicles', "/vehicles"],
    ['VehicleCreate', "/vehicles/create"],
    ['VehicleView', "/vehicles/:id"],
    ['VehicleEdit', "/vehicles/edit/:id"],

    ['Profile', "/profile"],
    ['ProfileEdit', "/profile/edit"],
    ['Password', "/change-password"],

    ['Users', "/users"],
    ['UserCreate', "/users/create"],
    ['UserView', "/users/:id"],
    ['UserEdit', "/users/edit/:id"],

    ['Mechanics', "/mechanics"],
    ['MechanicCreate', "/mechanics/create"],
    ['MechanicView', "/mechanics/:id"],
    ['MechanicEdit', "/mechanics/edit/:id"],

    ['PaymentInfo', "/payment"],
    ['Payment', "/payment/:id"],
    ['Notifications', "/notifications"],
    ['LogOut', "/logout"],
    ['LogIn', "/login"],
    ['Sites', "/sites"],
    ['Site', "/site/:id"],
    ['About', "/about"],
    ['FAQ', "/faq"],
    ['Tickets', "/tickets"],
    ['NotFound', "*"]
]);