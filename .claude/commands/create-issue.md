⏺ # GitHub 이슈 생성기

다음 요청에 대한 GitHub 이슈를 생성합니다: $ARGUMENT

## 작업 지침

1. **요청 분석**: 적절한 작업 유형과 우선순위 결정
2. **프로젝트 라벨링 시스템 적용** (CLAUDE.md 참조):
    - 작업 유형: `✨ feature`, `🔧 refactor`, `🎨 ui/ux`, `🗑️ cleanup`, `🔄 enhancement`
    - 우선순위: `🔥 high-priority`, `📋 medium-priority`, `🔖 low-priority`
    - 상태: `💡 idea` (새로운 제안의 경우)
3. **이슈 생성 내용**:
    - 명확하고 설명적인 제목
    - 프로젝트 맥락을 반영한 상세한 설명
    - 적절한 라벨
    - 필요시 완료 조건(Acceptance Criteria)
4. **마크다운 형식**으로 전문적으로 작성

## 프로젝트 컨텍스트

- **K-NOMAD HUB**: 디지털 노마드가 한국 도시를 찾는 Next.js 15.3.5 앱
- **기술 스택**: Next.js, React 19, TypeScript, Tailwind CSS v4, Supabase
- **주요 기능**: 도시 필터링, 좋아요/싫어요 시스템, 인증
- **현재 상태**: 20개 도시 구현, 미사용 페이지 정리 필요

`gh issue create` 명령어를 사용하여 저장소에 이슈를 생성하세요.
