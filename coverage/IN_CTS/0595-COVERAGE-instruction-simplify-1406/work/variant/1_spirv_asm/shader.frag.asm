; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 43
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %38
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %10 "buf0"
               OpMemberName %10 0 "one"
               OpName %12 ""
               OpName %20 "f"
               OpName %38 "_GLF_color"
               OpMemberDecorate %10 0 Offset 0
               OpDecorate %10 Block
               OpDecorate %12 DescriptorSet 0
               OpDecorate %12 Binding 0
               OpDecorate %38 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 -1
         %10 = OpTypeStruct %6
         %11 = OpTypePointer Uniform %10
         %12 = OpVariable %11 Uniform
         %13 = OpConstant %6 0
         %14 = OpTypePointer Uniform %6
         %18 = OpTypeFloat 32
         %19 = OpTypePointer Function %18
         %21 = OpConstant %18 5
         %22 = OpConstant %18 1
         %24 = OpTypeBool
         %26 = OpConstant %18 2
         %27 = OpConstant %18 3
         %32 = OpConstant %6 2
         %36 = OpTypeVector %18 4
         %37 = OpTypePointer Output %36
         %38 = OpVariable %37 Output
         %39 = OpConstant %18 0
         %40 = OpConstantComposite %36 %22 %39 %39 %22
         %42 = OpConstantComposite %36 %39 %39 %39 %39
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %20 = OpVariable %19 Function
         %15 = OpAccessChain %14 %12 %13
         %16 = OpLoad %6 %15
         %17 = OpShiftRightArithmetic %6 %9 %16
               OpStore %8 %17
         %23 = OpLoad %6 %8
         %25 = OpIEqual %24 %23 %9
         %28 = OpSelect %18 %25 %26 %27
         %29 = OpExtInst %18 %1 FClamp %21 %22 %28
               OpStore %20 %29
         %30 = OpLoad %18 %20
         %31 = OpConvertFToS %6 %30
         %33 = OpIEqual %24 %31 %32
               OpSelectionMerge %35 None
               OpBranchConditional %33 %34 %41
         %34 = OpLabel
               OpStore %38 %40
               OpBranch %35
         %41 = OpLabel
               OpStore %38 %42
               OpBranch %35
         %35 = OpLabel
               OpReturn
               OpFunctionEnd
