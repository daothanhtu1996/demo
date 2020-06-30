import React,{ memo} from 'react'

 const Footer = memo(props =>{
     const filterBtn = [{
         title : 'ALL',
         isActived : true,
         onClick: () => {},
         link: ''
     },{
        title : 'Active',
        isActived : true,
        onClick: () => {},
        link: '/active'
     },{
        title : 'Complete',
        isActived : true,
        onClick: () => {},
        link: '/complete'
    }]
     return(
       <footer className="footer">
           <span className = "todo-count">
               <strong>2</strong>
               <span></span>
               <span>item</span>
               <span>left</span>
           </span>
           <ul className="filters">
               {
                   filterBtn.map(btn =>(
                       <FilterBtn key={`btn${btn.title}`}{...btn} />
                   ))
               }
           </ul>
           <button className="clear-completed">Clear Complete</button>
       </footer>
     )
 })
 const FilterBtn = memo(props =>{
     const { title ,onClick ,link ,isActived} = props
     return(
        <>
                <li>
                    <a 
                        href ={`#/${link}`}
                        className={`${isActived ? 'selected':''}`}
                        onClick={onClick}
                        >
                            {title}
                    </a>
                </li>
                <span></span>
            </>
        )
 })
 export default Footer