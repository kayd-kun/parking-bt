

export default function VehicleDetail({Icon, title}: {
    icon: React.Component,
    title: string
},) {
    return (
        <>
            <div>
                <Icon/>
                {title}
            </div>
        </>
    )
}