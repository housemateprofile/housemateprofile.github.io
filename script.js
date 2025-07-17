// DOM 요소들
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const characterTabs = document.querySelectorAll('.tab-btn');
const galleryTabs = document.querySelectorAll('.gallery-tab');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.querySelector('.modal-close');

// 도윤 갤러리 이미지 목록
const doyoonImages = [
    '도윤 공용 에셋/doyoon_affectionate_smile.jpg',
    '도윤 공용 에셋/doyoon_after_shower.jpg',
    '도윤 공용 에셋/doyoon_anger.jpg',
    '도윤 공용 에셋/doyoon_answering.jpg',
    '도윤 공용 에셋/doyoon_avoid_eye_contact.jpg',
    '도윤 공용 에셋/doyoon_back_view.jpg',
    '도윤 공용 에셋/doyoon_casually_offered_coat.jpg',
    '도윤 공용 에셋/doyoon_cute_pout.jpg',
    '도윤 공용 에셋/doyoon_doing_dishes.jpg',
    '도윤 공용 에셋/doyoon_dozing.jpg',
    '도윤 공용 에셋/doyoon_dressing.jpg',
    '도윤 공용 에셋/doyoon_drinking_morning_coffee.jpg',
    '도윤 공용 에셋/doyoon_encounter_at_home.jpg',
    '도윤 공용 에셋/doyoon_evening_lost_in_thought_whiskey.jpg',
    '도윤 공용 에셋/doyoon_evening_sitting_on_sofa.jpg',
    '도윤 공용 에셋/doyoon_evening_smoke_and_whiskey.jpg',
    '도윤 공용 에셋/doyoon_evening_whiskey.jpg',
    '도윤 공용 에셋/doyoon_facing_each_other_on_sofa.jpg',
    '도윤 공용 에셋/doyoon_fluttering_hug.jpg',
    '도윤 공용 에셋/doyoon_folding_laundry.jpg',
    '도윤 공용 에셋/doyoon_gentle_eyes.jpg',
    '도윤 공용 에셋/doyoon_hesitation_at_door.jpg',
    '도윤 공용 에셋/doyoon_hugging.jpg',
    '도윤 공용 에셋/doyoon_in_shower.jpg',
    '도윤 공용 에셋/doyoon_irritation.jpg',
    '도윤 공용 에셋/doyoon_jealousy.jpg',
    '도윤 공용 에셋/doyoon_knee_kiss.jpg',
    '도윤 공용 에셋/doyoon_late_regret.jpg',
    '도윤 공용 에셋/doyoon_leaning_in_with_arousal.jpg',
    '도윤 공용 에셋/doyoon_longed_for_item_from_memory.jpg',
    '도윤 공용 에셋/doyoon_morning_cup_of_coffee.jpg',
    '도윤 공용 에셋/doyoon_morning_table_conversation.jpg',
    '도윤 공용 에셋/doyoon_rare_smile.jpg',
    '도윤 공용 에셋/doyoon_reading_book.jpg',
    '도윤 공용 에셋/doyoon_right_before_sleep.jpg',
    '도윤 공용 에셋/doyoon_secret_forehead_kiss.jpg',
    '도윤 공용 에셋/doyoon_secretly_shed_tears.jpg',
    '도윤 공용 에셋/doyoon_sleeping.jpg',
    '도윤 공용 에셋/doyoon_smoking_on_balcony.jpg',
    '도윤 공용 에셋/doyoon_speaking.jpg',
    '도윤 공용 에셋/doyoon_standing_by_door.jpg',
    '도윤 공용 에셋/doyoon_sulking_and_grumbling.jpg',
    '도윤 공용 에셋/doyoon_talking_while_doing_dishes.jpg',
    '도윤 공용 에셋/doyoon_tears_of_despair.jpg',
    '도윤 공용 에셋/doyoon_thoughts_and_resolution.jpg',
    '도윤 공용 에셋/doyoon_undressing.jpg'
];

// 서원 갤러리 이미지 목록
const seowonImages = [
    '서원 공용 에셋/seowon_affectionate_date.jpg',
    '서원 공용 에셋/seowon_affectionate_eyes.jpg',
    '서원 공용 에셋/seowon_after_shower.jpg',
    '서원 공용 에셋/seowon_anger.jpg',
    '서원 공용 에셋/seowon_avoiding_eyes_embarrassed.jpg',
    '서원 공용 에셋/seowon_awkward_smile.jpg',
    '서원 공용 에셋/seowon_deep_dream.jpg',
    '서원 공용 에셋/seowon_deep_kiss.jpg',
    '서원 공용 에셋/seowon_displeased_expression.jpg',
    '서원 공용 에셋/seowon_doing_laundry.jpg',
    '서원 공용 에셋/seowon_drinking_beverage.jpg',
    '서원 공용 에셋/seowon_embarrassed_blush.jpg',
    '서원 공용 에셋/seowon_falling_asleep.jpg',
    '서원 공용 에셋/seowon_falling_tears.jpg',
    '서원 공용 에셋/seowon_genuine_laughter.jpg',
    '서원 공용 에셋/seowon_hesitation_at_door.jpg',
    '서원 공용 에셋/seowon_hugging.jpg',
    '서원 공용 에셋/seowon_jealousy.jpg',
    '서원 공용 에셋/seowon_kiss.jpg',
    '서원 공용 에셋/seowon_loving_gaze.jpg',
    '서원 공용 에셋/seowon_offering_drink.jpg',
    '서원 공용 에셋/seowon_playful_but_serious_expression.jpg',
    '서원 공용 에셋/seowon_playful_kiss.jpg',
    '서원 공용 에셋/seowon_playful_smile.jpg',
    '서원 공용 에셋/seowon_playful_v_sign.jpg',
    '서원 공용 에셋/seowon_playfully_leaning_in.jpg',
    '서원 공용 에셋/seowon_pulling_by_waist.jpg',
    '서원 공용 에셋/seowon_romantic_kiss.jpg',
    '서원 공용 에셋/seowon_secretly_peeking.jpg',
    '서원 공용 에셋/seowon_shy_smile.jpg',
    '서원 공용 에셋/seowon_shyly_handing_item.jpg',
    '서원 공용 에셋/seowon_sleepy_state.jpg',
    '서원 공용 에셋/seowon_smiling_on_sofa.jpg',
    '서원 공용 에셋/seowon_standing_with_coffee_cup.jpg',
    '서원 공용 에셋/seowon_talking_on_sofa.jpg',
    '서원 공용 에셋/seowon_talking_while_drinking.jpg',
    '서원 공용 에셋/seowon_tears_of_despair.jpg',
    '서원 공용 에셋/seowon_teasing_whisper.jpg',
    '서원 공용 에셋/seowon_thigh_touch.jpg',
    '서원 공용 에셋/seowon_waiting_with_dessert.jpg',
    '서원 공용 에셋/seowon_waking_up_morning.jpg',
    '서원 공용 에셋/seowon_whiskey.jpg',
    '서원 공용 에셋/seowon_whispering.jpg'
];

// 브금 토글
musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play().then(() => {
            musicToggle.classList.add('playing');
        }).catch(error => {
            console.log('Audio playback failed:', error);
        });
    } else {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
    }
});

// 모바일 메뉴 토글
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// 네비게이션 링크 클릭 시 모바일 메뉴 닫기
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// 캐릭터 탭 전환
characterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const character = tab.dataset.character;
        
        // 탭 활성화 상태 변경
        characterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // 프로필 전환
        document.getElementById('doyoon-profile').style.display = character === 'doyoon' ? 'block' : 'none';
        document.getElementById('seowon-profile').style.display = character === 'seowon' ? 'block' : 'none';
    });
});

// 갤러리 탭 전환
galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const gallery = tab.dataset.gallery;
        
        // 탭 활성화 상태 변경
        galleryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // 갤러리 전환
        document.getElementById('doyoon-gallery').style.display = gallery === 'doyoon' ? 'grid' : 'none';
        document.getElementById('seowon-gallery').style.display = gallery === 'seowon' ? 'grid' : 'none';
    });
});

// 갤러리 이미지 로드
function loadGalleryImages() {
    const doyoonGallery = document.getElementById('doyoon-gallery');
    const seowonGallery = document.getElementById('seowon-gallery');
    
    // 도윤 갤러리 이미지 추가
    doyoonImages.forEach(image => {
        const item = createGalleryItem(image);
        doyoonGallery.appendChild(item);
    });
    
    // 서원 갤러리 이미지 추가
    seowonImages.forEach(image => {
        const item = createGalleryItem(image);
        seowonGallery.appendChild(item);
    });
}

// 갤러리 아이템 생성
function createGalleryItem(imageSrc) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = '갤러리 이미지';
    img.loading = 'lazy';
    
    item.appendChild(img);
    
    // 이미지 클릭 시 모달 열기
    item.addEventListener('click', () => {
        imageModal.style.display = 'block';
        modalImage.src = imageSrc;
    });
    
    return item;
}

// 모달 닫기
modalClose.addEventListener('click', () => {
    imageModal.style.display = 'none';
});

// 모달 외부 클릭 시 닫기
imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        imageModal.style.display = 'none';
    }
});

// ESC 키로 모달 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imageModal.style.display === 'block') {
        imageModal.style.display = 'none';
    }
});

// 스크롤 애니메이션
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.profile-section, .scene-text p');
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !element.classList.contains('animated')) {
            element.classList.add('animated');
            element.style.animation = 'fadeInUp 0.8s ease-out';
        }
    });
}

// 스크롤 이벤트 리스너
window.addEventListener('scroll', handleScrollAnimation);

// 성향 바 애니메이션
function animateTraitBars() {
    const traitBars = document.querySelectorAll('.trait-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
            }
        });
    }, { threshold: 0.5 });
    
    traitBars.forEach(bar => observer.observe(bar));
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    loadGalleryImages();
    animateTraitBars();
    handleScrollAnimation();
    
    // 스무스 스크롤
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 