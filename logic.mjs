export const EMPTY_PROFILE={firstName:'',lastName:'',email:'',phone:'',orderStatuses:true,passwordChanges:true,specialOffers:false,newsletter:false};
export const PROFILE_KEY='little-lemon:profile:v1';
export const MENU_KEY='little-lemon:menu:v1';
export function validEmail(value){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());}
export function validProfile(profile){return profile.firstName.trim().length>0&&validEmail(profile.email);}
export function filterMenu(menu,query='',category='all'){const q=query.trim().toLowerCase();return menu.filter(item=>(category==='all'||item.category===category)&&`${item.name} ${item.description}`.toLowerCase().includes(q));}
export function initials(profile){return `${profile.firstName.trim().slice(0,1)}${profile.lastName.trim().slice(0,1)}`.toUpperCase()||'LL';}
export function totalPrice(cart){return cart.reduce((total,row)=>total+row.price*row.quantity,0);}
export function validMenu(items){return Array.isArray(items)&&items.length>0&&items.every(x=>typeof x.name==='string'&&typeof x.description==='string'&&typeof x.category==='string'&&Number.isFinite(Number(x.price))&&Number(x.price)>=0);}
