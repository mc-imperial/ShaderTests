; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 45
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %18
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %18 "_GLF_color"
               OpName %22 "buf0"
               OpMemberName %22 0 "_GLF_uniform_int_values"
               OpName %24 ""
               OpDecorate %18 Location 0
               OpDecorate %21 ArrayStride 16
               OpMemberDecorate %22 0 Offset 0
               OpDecorate %22 Block
               OpDecorate %24 DescriptorSet 0
               OpDecorate %24 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpConstant %6 3
          %8 = OpConstant %6 1
          %9 = OpConstant %6 2
         %11 = OpTypeBool
         %15 = OpTypeFloat 32
         %16 = OpTypeVector %15 4
         %17 = OpTypePointer Output %16
         %18 = OpVariable %17 Output
         %19 = OpTypeInt 32 0
         %20 = OpConstant %19 2
         %21 = OpTypeArray %6 %20
         %22 = OpTypeStruct %21
         %23 = OpTypePointer Uniform %22
         %24 = OpVariable %23 Uniform
         %25 = OpConstant %6 0
         %26 = OpTypePointer Uniform %6
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %10 = OpBitFieldSExtract %6 %7 %8 %9
         %12 = OpIEqual %11 %10 %8
               OpSelectionMerge %14 None
               OpBranchConditional %12 %13 %40
         %13 = OpLabel
         %27 = OpAccessChain %26 %24 %25 %25
         %28 = OpLoad %6 %27
         %29 = OpConvertSToF %15 %28
         %30 = OpAccessChain %26 %24 %25 %8
         %31 = OpLoad %6 %30
         %32 = OpConvertSToF %15 %31
         %33 = OpAccessChain %26 %24 %25 %8
         %34 = OpLoad %6 %33
         %35 = OpConvertSToF %15 %34
         %36 = OpAccessChain %26 %24 %25 %25
         %37 = OpLoad %6 %36
         %38 = OpConvertSToF %15 %37
         %39 = OpCompositeConstruct %16 %29 %32 %35 %38
               OpStore %18 %39
               OpBranch %14
         %40 = OpLabel
         %41 = OpAccessChain %26 %24 %25 %8
         %42 = OpLoad %6 %41
         %43 = OpConvertSToF %15 %42
         %44 = OpCompositeConstruct %16 %43 %43 %43 %43
               OpStore %18 %44
               OpBranch %14
         %14 = OpLabel
               OpReturn
               OpFunctionEnd
