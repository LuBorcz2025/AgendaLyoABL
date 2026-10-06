import './index.css';
import { SNACKS } from '../AnimatedBackground';

const BACKGROUND_ITEMS = [
    { type: 0, top: '22%', left: '12%', rotate: '-18deg', scale: 2.8 },
    { type: 2, top: '10%', right: '8%', rotate: '20deg', scale: 3.5 },
    { type: 3, top: '48%', left: '35%', rotate: '12deg', scale: 4.7 },
    { type: 1, top: '58%', right: '27%', rotate: '-15deg', scale: 2.8 },
    { type: 1, top: '10%', right: '57%', rotate: '15deg', scale: 2.8 },
    { type: 2, top: '28%', right: '37%', rotate: '-15deg', scale: 2.8 },
    { type: 2, top: '78%', left: '14%', rotate: '25deg', scale: 4.4 },
    { type: 3, top: '88%', left: '50%', rotate: '-12deg', scale: 2.7 },
    { type: 0, top: '86%', right: '15%', rotate: '-20deg', scale: 2.6 },
];

function PetBackground() {
    return (
        <div className="pet-background" aria-hidden="true">
            {BACKGROUND_ITEMS.map((item, index) => (
                <div
                    key={index}
                    className="pet-background-item"
                    style={{
                        top: item.top,
                        left: item.left,
                        right: item.right,
                        transform: `rotate(${item.rotate}) scale(${item.scale})`,
                    }}
                    dangerouslySetInnerHTML={{
                        __html: SNACKS[item.type],
                    }}
                />
            ))}
        </div>
    );
}

export default PetBackground;