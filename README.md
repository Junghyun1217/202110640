# 🚀 YOLOv9를 활용한 객체 탐지 프로젝트 (Object Detection with YOLOv9)

## 🎯 프로젝트 개요
이 프로젝트는 최신 객체 탐지 모델인 YOLOv9를 사용하여 이미지 속의 객체(고양이, 식물 등)를 실시간으로 탐지하고 위치를 파악하는 실습입니다. 
CIFAR-10 이미지 분류 프로젝트에 이어, 컴퓨터 비전의 고급 기술인 '객체 탐지' 분야를 다룹니다.

## 💡 사용 모델
- **모델:** YOLOv9 (You Only Look Once, v9)
- **탐지 객체:** COCO 데이터셋 기반 (80가지 클래스)
- **사용 가중치:** gelan-c.pt (미리 학습된 가중치 사용)

## 🛠️ 실습 환경
- **실습 환경:** Google Colaboratory (GPU 환경)
- **주요 라이브러리:** ultralytics, PyTorch
- **실습 노트북:** [YOLOv9 Inference Notebook 바로가기](YOLOv9_Object_Detection/yolo_inference_notebook.ipynb)
  // 👆 이 경로는 사용자님의 실제 ipynb 파일 이름 및 경로로 바꿔주세요.

## 🖼️ 탐지 결과 시각화
// ⚠️ 여기에 다운로드한 '결과 이미지'를 GitHub에 올려서 링크를 걸어야 합니다.

### 탐지 대상: 고양이와 식물
![YOLOv9 Detection Result Example](results/candp_detected.jpg) 
// 👆 이 경로는 나중에 이미지 파일이 저장될 경로입니다.

## 💻 실행 방법
1. ipynb 파일을 Google Colab에서 열고, GPU 런타임을 설정합니다.
2. Cell을 순서대로 실행하여 YOLOv9 소스 코드 및 가중치를 다운로드합니다.
3. 새로운 이미지를 업로드하고 탐지 명령어를 실행합니다.
