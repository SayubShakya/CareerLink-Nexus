import { useState, useEffect } from 'react';
import slider1 from '../../assets/images/slider-1.png';
import slider2 from '../../assets/images/slider-2.png';
import slider3 from '../../assets/images/slider-3.png';

const slides = [
    {
        image: slider1,
        title: 'Modern Workspaces',
        description: 'Find positions in the world\'s most innovative environments.',
        alt: 'Clean, minimalist modern office workspace with a view'
    },
    {
        image: slider2,
        title: 'Collaborative Cultures',
        description: 'Join teams that value diversity and collective success.',
        alt: 'Diverse professional team collaborating in a modern meeting room'
    },
    {
        image: slider3,
        title: 'Accelerated Growth',
        description: 'Take the next step in your professional journey.',
        alt: 'Abstract modern architecture with stairs representing career growth'
    }
];

export default function Slider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const sliderStyles = {
        container: {
            position: 'relative',
            height: '500px',
            width: '100%',
            overflow: 'hidden',
            borderRadius: 'var(--radius-xl)',
            backgroundColor: 'var(--bg-subtle)',
        },
        slide: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            transition: 'opacity 1s ease-in-out',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        activeSlide: {
            opacity: 1,
            zIndex: 1,
        },
        image: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.7)',
        },
        content: {
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            color: 'white',
            maxWidth: '600px',
            padding: '0 var(--space-lg)',
        },
        dots: {
            position: 'absolute',
            bottom: 'var(--space-lg)',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 'var(--space-sm)',
            zIndex: 3,
        },
        dot: {
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            border: 'none',
            cursor: 'pointer',
            transition: 'var(--transition-fast)',
        },
        activeDot: {
            backgroundColor: 'white',
            width: '24px',
            borderRadius: '4px',
        }
    };

    return (
        <div style={sliderStyles.container}>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    style={{
                        ...sliderStyles.slide,
                        ...(current === index ? sliderStyles.activeSlide : {})
                    }}
                    aria-hidden={current !== index}
                >
                    <img src={slide.image} alt={slide.alt} style={sliderStyles.image} />
                    <div style={sliderStyles.content}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>{slide.title}</h2>
                        <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>{slide.description}</p>
                    </div>
                </div>
            ))}

            <div style={sliderStyles.dots}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        style={{
                            ...sliderStyles.dot,
                            ...(current === index ? sliderStyles.activeDot : {})
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
