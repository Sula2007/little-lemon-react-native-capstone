import test from 'node:test';
import assert from 'node:assert/strict';
import {EMPTY_PROFILE,validProfile,filterMenu,totalPrice,validMenu} from './logic.mjs';
const menu=[{name:'Greek Salad',description:'Feta and cucumber',category:'starters',price:12.99},{name:'Pasta',description:'Tomato sauce',category:'mains',price:6.99}];
test('onboarding rejects blank names and malformed emails',()=>{assert.equal(validProfile(EMPTY_PROFILE),false);assert.equal(validProfile({...EMPTY_PROFILE,firstName:'  ',email:'a@b.com'}),false);assert.equal(validProfile({...EMPTY_PROFILE,firstName:'Alex',email:'invalid'}),false);assert.equal(validProfile({...EMPTY_PROFILE,firstName:'Alex',email:'alex@example.com'}),true)});
test('search is case insensitive and combines with selected category',()=>{assert.equal(filterMenu(menu,'FETA','starters').length,1);assert.equal(filterMenu(menu,'feta','mains').length,0);assert.equal(filterMenu(menu,'  PASTA  ')[0].name,'Pasta');assert.equal(filterMenu(menu,'missing').length,0)});
test('cart totals use quantity and validation rejects corrupt cache',()=>{assert.equal(totalPrice([{price:7.5,quantity:3}]),22.5);assert.equal(validMenu(menu),true);assert.equal(validMenu([{name:'Broken'}]),false);assert.equal(validMenu(null),false)});
