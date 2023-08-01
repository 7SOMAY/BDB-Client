export default function Layout(props){
    return(
        <div className={'flex flex-col items-center min-h-screen bg-gradient-to-r from-[#E3DFFD] to-[#ECF2FF] justify-center'}>
            {props.children}
        </div>
    )
}