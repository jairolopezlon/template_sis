/* jshint esversion:8 */

const mainMenu = (props)=>{
    console.log(props)
    return 
        `<ul>
            ${props.data.reduce((acc, cur)=>{
                return cur.visible 
                    ? `${acc}<li><a href="${cur.href}">${cur.label}</a></li>` 
                    : acc;
            },'')}
        </ul>`;
}

export {
    mainMenu,
}