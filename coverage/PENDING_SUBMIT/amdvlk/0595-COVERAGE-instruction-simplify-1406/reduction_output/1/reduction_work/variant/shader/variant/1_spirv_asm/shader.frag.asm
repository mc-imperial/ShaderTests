; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 41
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %36
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %10 "buf0"
               OpMemberName %10 0 "one"
               OpName %12 ""
               OpName %20 "f"
               OpName %36 "_GLF_color"
               OpMemberDecorate %10 0 Offset 0
               OpDecorate %10 Block
               OpDecorate %12 DescriptorSet 0
               OpDecorate %12 Binding 0
               OpDecorate %36 Location 0
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
         %34 = OpTypeVector %18 4
         %35 = OpTypePointer Output %34
         %36 = OpVariable %35 Output
         %37 = OpConstant %18 0
         %38 = OpConstantComposite %34 %22 %37 %37 %22
         %40 = OpConstantComposite %34 %37 %37 %37 %37
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
         %31 = OpFOrdEqual %24 %30 %26
               OpSelectionMerge %33 None
               OpBranchConditional %31 %32 %39
         %32 = OpLabel
               OpStore %36 %38
               OpBranch %33
         %39 = OpLabel
               OpStore %36 %40
               OpBranch %33
         %33 = OpLabel
               OpReturn
               OpFunctionEnd
