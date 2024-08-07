import { Container } from "./styles";
import { ReactNode } from "react";
import { ComponentType } from "react"; // Import ComponentType

type PropsSkill = {
    valueInitial: number;
    children?: ReactNode;
    colorType: string;
    icon: ComponentType; // Use ComponentType instead of ElementType
    name: string;
};

export const Skills = ({
    valueInitial,
    icon: Icon,
    colorType,
    name,
}: PropsSkill) => {
    return (
        <Container>
            <span>
                {/* {Icon && <Icon size={40} style={{ color: `${colorType}` }} />} */}
                {name}
            </span>
            <progress max="100" value={valueInitial} />
            <strong> {valueInitial}%</strong>
        </Container>
    );
};
