import React,{useState} from "react";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";


type MenuItem = {
    label: string;
    icon: JSX.Element;
    href: string;
    children?: MenuItem[];
  };
  
  type props ={
    collapsed: boolean,
    menu: MenuItem,
    index: number
  }
  
  export const MenuChild = ({ menu,index,collapsed}: props) =>{
    const [showChild,setShowChild] = useState(false);
  
    const icon = showChild == true ? <AiFillCaretDown /> : <AiFillCaretRight />;
  
    return(
      <>
      <li key={index}>
                {!collapsed && menu?.children ? (
                  <>
                    <span
                      onClick={()=> setShowChild((prev) => !prev)}
                      className="flex text-sm items-center justify-between hover:bg-yellow hover:text-black rounded py-2 px-2 cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-6">{menu.icon}</span>{" "}
                        <span>{!collapsed && menu.label}</span>
                      </div>
                      <div>
                        <span className="cursor-pointer">{!collapsed &&  icon}</span>
                      </div>
                    </span>
                  </>
                ) : (
                  <>
                    <Link
                      className="flex text-sm items-center gap-2 hover:bg-yellow hover:text-black rounded py-2 px-2"
                      href={menu.href}
                    >
                      <span className="w-6">{menu.icon}</span>{" "}
                      <span>{!collapsed && menu.label}</span>
                    </Link>
                  </>
                )}
                {showChild && (
                  <ul>
                    {menu?.children?.map((child, index) => (
                      <li key={index} className="px-8 text-sm">
                        <Link
                          className="flex items-center gap-2 hover:bg-yellow hover:text-black rounded py-2 px-2"
                          href={child.href}
                        >
                          {/* <span className="w-6">{child.icon}</span>{" "} */}
                          <span>{!collapsed && child.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
      </>
    )
  }