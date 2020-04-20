import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [{id:1,brand:'Cadbury' ,product:'Creme Biscuit - Strawberry',quantity:11,price:29,mrp:30,img:'https://www.bigbasket.com/media/uploads/p/s/327663_11-cadbury-oreo-creme-biscuit-strawberry.jpg',offer:3},
          {id:2,brand:'MAGGI',product:'MAGGI 2-Minute Instant Noodles - Masala',quantity:5,price:76,mrp:80,img:'https://www.bigbasket.com/media/uploads/p/s/266160_14-maggi-2-minute-instant-noodles-masala.jpg',offer:5},
          {id:3,brand:'Nandini',product:'Pure Ghee',quantity:8,price:99,mrp:110,img:'https://www.bigbasket.com/media/uploads/p/s/148674_2-nandini-pure-ghee.jpg',offer:10},
          {id:4,brand:'Fortune',product:'Sunflower Refined Oil',quantity:14,price:114,mrp:120,img:'https://www.bigbasket.com/media/uploads/p/s/274145_10-fortune-sunflower-refined-oil.jpg',offer:5},
          {id:5,brand:'Aashirvaad',product:'Atta - Whole Wheat',quantity:8,price:259,mrp:270,img:'https://www.bigbasket.com/media/uploads/p/s/126903_7-aashirvaad-atta-whole-wheat.jpg',offer:4},
          {id:6,brand:'BORGES',product:'Olive Oil - Extra Light',quantity:7,price:1224,mrp:1249,img:'https://www.bigbasket.com/media/uploads/p/s/40007265_3-borges-olive-oil-extra-light.jpg',offer:2},
          {id:7,brand:'Real Activ',product:'Juice - Apple with No Added Sugar',quantity:12,price:44,mrp:45,img:'https://www.bigbasket.com/media/uploads/p/s/40022610_9-real-activ-juice-apple-with-no-added-sugar.jpg',offer:2},
          {id:8,brand:'Dove',product:'Cream Beauty Bathing Bar',quantity:4,price:361,mrp:380,img:'https://www.bigbasket.com/media/uploads/p/s/40158282_1-dove-cream-beauty-bathing-bar.jpg',offer:5},
          {id:9,brand:'Harpic',product:'Disinfectant Toilet Cleaner',quantity:6,price:81,mrp:89,img:'https://www.bigbasket.com/media/uploads/p/s/263754_10-harpic-disinfectant-toilet-cleaner-original-power-plus.jpg',offer:9},
          {id:10,brand:'Surf Excel',product:'Matic Front Load Detergent Powder',quantity:10,price:240,mrp:250,img:'https://www.bigbasket.com/media/uploads/p/s/100142980_17-surf-excel-matic-front-load-detergent-powder.jpg',offer:4},
          {id:11,brand:'Vim',product:'Dishwash Bar',quantity:8,price:9,mrp:10,img:'https://www.bigbasket.com/media/uploads/p/s/40038652_1-vim-dishwash-bar.jpg',offer:10}
        ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {  
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
   
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }
    
  else{
    return state
    }
    
}

export default cartReducer
