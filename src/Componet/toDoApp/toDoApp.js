import React, { Component } from "react";
import './toDoApp.css';

export default class toDoApp extends Component{
    state={
        input:"",
        items:['Wake Up', 'Breakfast', 'Sleep', 'Pauljick', 'Jose jill saju'],
        validation:" "
    };
    handleChange=event=>{
        
            this.setState({
               input:event.target.value
            });
            
            if (event.target.value ==="") {
                this.setState({
                    validation:""});
                   
              } else {
                this.setState({
                    validation:""});
              }

    };
    storeItems=event=>{
        event.preventDefault();
            const{input}=this.state;
            // old method
            // const allItems=this.state.items;
            // allItems.push(input);
            // this.setState({
            //     items:allItems
            // })
            // New Method Using a spread method    to store data to items array
            this.setState({
                items:[...this.state.items,input],
                input:""
            })
    }
    deleteItem=(key)=>{

        // const allItems=this.state.items;
        // allItems.splice(key,1)
        // this.setState({
        //     items:allItems});
        //New method
        this.setState({
            items:this.state.items.filter((data,index)=>index!==key)
        })
        const{input}=this.state;
        if (input.target.value ==="") {
            this.setState({
                validation:""});
               
          } else {
            this.setState({
                validation:""});
          }
    }
    editItem=(key)=>{

        const{input}=this.state;
        if (input ==="") {
            this.setState({
                validation:"Enter The data before editing"});
               
          } else {
           
         
        const allItems=this.state.items;
        allItems.splice(key,1,input)
        this.setState({
            items:allItems});
        }
          // const allItems=this.state.items;
            // allItems.push(input);
            // this.setState({
            //     items:allItems
            // })
    }
    render(){
        const{input,items,validation}=this.state;
        console.log(items);
        return(
            <div className="todo-container" >
                
                <form className='input-section' onSubmit={this.storeItems} >
                   
                    <input required type="text" value={input} onChange={this.handleChange} placeholder="Enter data to Edit/Add .." />
                        <label>{validation}</label>
                   

                </form>
                <ul>
                        {/* <li>Item <i className="fa-solid fa-trash-can"></i></li> */}
                    {items.map((data,index)=>
                    (
                        <li>{data} <i onClick={()=>this.editItem(index) } className="fa-solid fa-pen-to-square edit"></i>
                                   <i onClick={()=>this.deleteItem(index) } className="fa-solid fa-trash-can"></i>
                        </li> 
                    ))}
                       
                </ul>

            </div>
        );
    }
}