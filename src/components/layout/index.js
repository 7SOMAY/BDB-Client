export default function Index(props){
    return(
        <div className={'flex items-center px-20 min-h-screen bg-gradient-to-r from-[#E3DFFD] to-[#ECF2FF] justify-center'}>
            {props.children}
        </div>
    )
}