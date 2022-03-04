; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 39
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %34
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %16 "buf0"
               OpMemberName %16 0 "one"
               OpName %18 ""
               OpName %34 "_GLF_color"
               OpMemberDecorate %16 0 Offset 0
               OpDecorate %16 Block
               OpDecorate %18 DescriptorSet 0
               OpDecorate %18 Binding 0
               OpDecorate %34 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 1
         %15 = OpTypeFloat 32
         %16 = OpTypeStruct %15
         %17 = OpTypePointer Uniform %16
         %18 = OpVariable %17 Uniform
         %19 = OpConstant %6 0
         %20 = OpTypePointer Uniform %15
         %24 = OpTypeBool
         %28 = OpConstant %6 5
         %32 = OpTypeVector %15 4
         %33 = OpTypePointer Output %32
         %34 = OpVariable %33 Output
         %35 = OpConstant %15 1
         %36 = OpConstant %15 0
         %37 = OpConstantComposite %32 %35 %36 %36 %35
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
               OpStore %8 %9
               OpBranch %10
         %10 = OpLabel
               OpLoopMerge %12 %13 None
               OpBranch %14
         %14 = OpLabel
         %21 = OpAccessChain %20 %18 %19
         %22 = OpLoad %15 %21
         %23 = OpConvertFToS %6 %22
         %25 = OpSGreaterThanEqual %24 %23 %9
               OpBranchConditional %25 %11 %12
         %11 = OpLabel
         %26 = OpLoad %6 %8
         %27 = OpIAdd %6 %26 %9
               OpStore %8 %27
         %29 = OpSGreaterThanEqual %24 %26 %28
               OpSelectionMerge %31 None
               OpBranchConditional %29 %30 %31
         %30 = OpLabel
               OpStore %34 %37
               OpBranch %12
         %31 = OpLabel
               OpBranch %13
         %13 = OpLabel
               OpBranch %10
         %12 = OpLabel
               OpReturn
               OpFunctionEnd
