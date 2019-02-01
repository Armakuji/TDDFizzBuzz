const fizzBuzz = require('./FizzBuzz')

test('num mod 3 == 0 is Fizz', ()=>{
   for(i = 0 ; i <= 100 ; i++ ){
       
       if(i % 3 == 0 && i % 5 != 0){
         
         expect(fizzBuzz(i)).toBe("Fizz")
        
       }  
   }
})

test('num mod 5 == 0 is Buzz', ()=>{
   
    for(i = 0 ; i <= 100 ; i++ ){
        
        if(i % 5 == 0 && i % 3 != 0 ){
          strNum = i.toString();
          if(strNum.includes("3") && strNum.includes("5")){

          }else{
                expect(fizzBuzz(i)).toBe("Buzz")
          }
        }
    }
 })

 test('num mod 5 == 0 && i mod 3 == 0 is FizzBuzz', ()=>{
    for(i = 0 ; i <= 100 ; i++ ){
        if(i % 5 == 0 && i % 3 == 0){
          expect(fizzBuzz(i)).toBe("FizzBuzz")
        }
    
    }
 })

 test('num mod 3 = 0 or num is includes 3 is Buzz', ()=>{
    for(i = 0 ; i <= 100 ; i++ ){
        strNum = i.toString();
          if(strNum.includes("3") || i % 3 == 0 ){
            if(strNum.includes("5") || i % 5 == 0 )
            {

            }else{
               
                expect(fizzBuzz(i)).toBe("Fizz")
            }
           
          }
    
    }
 })

 test('num mod 5 = 0 or num is includes 5 is Buzz', ()=>{
    for(i = 0 ; i <= 100 ; i++ ){
        strNum = i.toString();
          if(strNum.includes("5") || i % 5 == 0 ){
            if(strNum.includes("3") || i % 3 == 0 )
            {

            }else{
              
                expect(fizzBuzz(i)).toBe("Buzz")
            }
           
          }
    
    }
 })