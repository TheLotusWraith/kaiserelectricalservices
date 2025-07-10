type MenuItemProps={
    title?: string,
    link?: string
}


function MenuItem({title='TITLE', link='#LINK#'}: MenuItemProps) {
    return(
        <a href={link} >{title}</a>
    )
}

export default MenuItem;
