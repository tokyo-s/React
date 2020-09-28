import React, {Component} from 'react';

let contacts= [
    {
        id:1,
        name:"Ced",
        phoneNumber:'+3736343213232',
        image:'../public/img/logo512.png'
    },
    {
        id:2,
        name:"Chen",
        phoneNumber:'+34924687',
        image:'../public/img/logo512.png'
    },
    {
        id:3,
        name:"Rick",
        phoneNumber:'+3734511222',
        image:'../public/img/logo512.png'
    },
    {
        id:4,
        name:"Morty",
        phoneNumber:'+37313467892',
        image:'../public/img/logo512.png'
    },
]
class ContactList extends Component{
    constructor(props){
        super(props);///////////////////
        this.state={displayedCOntacts:contacts};
    }

    render(){
        return(
        <div className="contacts">
            <div>
                <input className="search-field" type="text" placeholder="Search..." onChange={console.log(12)}/>
            </div>
            <ul className="contact-list">
                {this.state.displayedCOntacts.map(item=> {
                    return(
                    <Contact key={item.id} image={item.image} name={item.name} phoneNumber={item.phoneNumber} />
                        )
                        })}
                <li>hfhfsofqhfqhf</li>
            </ul>
        </div>
        
      );
    }
}
export default ContactList;