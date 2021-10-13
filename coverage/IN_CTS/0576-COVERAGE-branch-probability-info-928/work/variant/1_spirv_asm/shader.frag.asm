; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 25
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %20
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %20 "_GLF_color"
               OpDecorate %20 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeBool
          %7 = OpConstantTrue %6
         %10 = OpTypeInt 32 1
         %11 = OpConstant %10 1065353216
         %12 = OpTypeFloat 32
         %13 = OpConstant %12 1
         %18 = OpTypeVector %12 4
         %19 = OpTypePointer Output %18
         %20 = OpVariable %19 Output
         %21 = OpConstant %12 0
         %22 = OpConstantComposite %18 %13 %21 %21 %13
         %24 = OpConstantComposite %18 %21 %21 %21 %21
          %4 = OpFunction %2 None %3
          %5 = OpLabel
               OpSelectionMerge %9 None
               OpBranchConditional %7 %8 %9
          %8 = OpLabel
               OpBranch %9
          %9 = OpLabel
         %14 = OpBitcast %10 %13
         %15 = OpIEqual %6 %11 %14
               OpSelectionMerge %17 None
               OpBranchConditional %15 %16 %23
         %16 = OpLabel
               OpStore %20 %22
               OpBranch %17
         %23 = OpLabel
               OpStore %20 %24
               OpBranch %17
         %17 = OpLabel
               OpReturn
               OpFunctionEnd
