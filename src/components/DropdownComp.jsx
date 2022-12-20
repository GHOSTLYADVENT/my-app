import { Component } from "react";

export class DropdownComp extends Component {

    state = {
        hideDropdownItems: true,
    }

    openCloseItems = () => {
        this.setState((prevState, prevProps) => {
            return {
                hideDropdownItems: !prevState.hideDropdownItems
            }          
        })
    }
    
    render() {
        return (
            <div>
                <ul className="dropdown active">
                    <li onClick={this.openCloseItems}>Services
                        <select></select>
                    </li>
                  
                    {   this.state.hideDropdownItems ? null
                     : 
                      <div className="flex-li">
                        <a className="flex-li-a" href="./#">Blog</a>
                        <a className="flex-li-a" href="./#">Learn</a>
                        <a className="flex-li-a" href="./#">Tutorials</a>
                    </div>
                        }
                </ul>
            </div>
        )
    }
}
