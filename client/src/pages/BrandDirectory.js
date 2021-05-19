import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/BrandDirectory.css';

export default function BrandDirectory() {
    const letterArray = {
        'A':["Abercrombie & Fitch","Aldo","Aritiza","Adidas","American Eagle"],
        'B':["Banana Republic","Burberry","Boohoo","Balenciaga"],
        'C':["Canada Goose","Chanel","Converse","Calvin Klein","Christian Dior","Columbia","Champion","Club Monaco", "Coach"],
        'D':["Dynamite"],
        'E':[],
        'F':["Fila","Forever 21"],
        'G':["Gap","Giorgio Armani","Guess","Garage","Givenchy","Gildan","Gucci"],
        'H':["H&M","Hermes"],
        'I':[],
        'J':["J.Crew"],
        'K':["Kate Spade"],
        'L':["Lacoste","Lululemon","Levis","Louis Vuitton"],
        'M':["Mango","Marc Jacobs","Michael Kors"],
        'N':["NastyGal","New Balance","Nike"],
        'O':["Old Navy"],
        'P':["Patagonia","Prada","PrettyLittleThing"],
        'Q':[],
        'R':["Ralph Lauren","Reebok","Roots"],
        'S':["Skechers","Steve Madden"],
        'T':["Ted Baker","The North Face","Tommy Hilfiger"],
        'U':["Under Armour","Uniqlo","Urban Outfitters"],
        'V':["Vans","Versace","Victoria’s Secret"],
        'W':[],
        'X':[],
        'Y':[],
        'Z':["Zara"]
    }
    const setId = (key) => {        
        if(key.charCodeAt(0) < 90) {
            for(let i=1; i < 26; i++ ) {                
                let newKey = String.fromCharCode(key.charCodeAt(0) + i);
                if(letterArray[newKey] && letterArray[newKey].length > 0) {
                    return newKey
                }
            }
        }
    }
    return (
        <div className="brand_directory">
            <div className="brand_directory_title">
                <p>All Brands - Apparel</p>
            </div>
            <div className="brand_directory_list">
                {
                    Object.keys(letterArray).map((key)=>(
                        <a href={`#${key}`}><span  className={key === "E"  ||  key === "I" || key=== "Q" || key=== "W"||key=== "X"||key=== "Y"  ? "greyed_color":"black_color"} style={{marginLeft:1, marginRight:2}}>{key}</span></a>
                    ))
                }
            </div>
            <div className="brand_directory_wholeList">
             <hr className="hr" id='A'></hr>
                {
                    Object.keys(letterArray).map((key)=>(
                        <>
                        { 
                            letterArray[key].length>0 ?
                                <div>
                                    <div className="brand_directory_eachRow d-block d-md-flex">
                                        {letterArray[key].length>0 ? <> 
                                            <h6 className="letter" >{key}</h6>
                                            
                                            <div className="brand-name-container">
                                                {letterArray[key].length>0 && letterArray[key].map(val=>(
                                                    <Link to = {'/companies/'+ val}
                                                    
                                                    className={`col-3 col-md-3 ml-md-0 list_letter 
                                                            ${val==="Burberry" ||val==="Balenciaga" ||val==="Canada Goose" ||val==="Chanel"||val==="Christian Dior"||val==="Coach"
                                                            ||val==="Dynamite"||val==="Fila"||val==="Giorgio Armani "||val==="Gucci"||val==="Givenchy"||val==="Garage"||val==="Gildan"
                                                            ||val==="Hermes"||val==="Hugo Boss"||val==="J.Crew"||val==="Kate Spade"||val==="Lacoste"||val==="Louis Vuitton"
                                                            ||val==="Mango"||val==="Marc Jacobs"||val==="Michael Kors"||val==="Prada"||val==="Roots"||val==="Skechers"||val==="Ted Baker"
                                                            ||val==="Urban Outfitters"||val==="Versace"||val ==="Giorgio Armani"
                                                            ? "greyed_color":"black_color"}`}
                                                    >
                                                        {val}
                                                    </Link>
                                                ))}
                                            </div>
                                            </>:
                                            null}
                                    </div>
                                    <hr className="hr"  id={setId(key)}></hr>
                                </div>
                            :null}
                        </>
                    ))
                }
            </div>
        </div>
    )
}
