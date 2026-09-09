import { Icon } from "@iconify/react";

const IconComponent = ({
    icon,
    height,
    width,
    className,
    fontSize = 24,
    rotate,
    onClick
}: {
    icon: string,
    height?: number,
    width?: number,
    className?: string,
    fontSize?: number,
    rotate?: number,
    onClick?: any
}) => {
    return (
        <Icon
            icon={icon}
            height={height}
            width={width}
            className={className}
            fontSize={fontSize}
            onClick={onClick}
            rotate={rotate}
        />
    )
}

export default IconComponent;