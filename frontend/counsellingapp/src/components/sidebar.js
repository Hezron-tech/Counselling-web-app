export default function Sidebar({links}){
  return (
    <div className="sidebar">
      {links.map(link =>(
        <a className="sidebar-link" href="#!" key= {link.name}>{link.name}</a>
      ))}
    </div>
  )
}