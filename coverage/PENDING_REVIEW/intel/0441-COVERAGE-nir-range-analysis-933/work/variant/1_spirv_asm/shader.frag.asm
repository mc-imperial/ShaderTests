; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 49
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %21
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f"
               OpName %21 "_GLF_color"
               OpName %25 "buf0"
               OpMemberName %25 0 "_GLF_uniform_int_values"
               OpName %27 ""
               OpDecorate %21 Location 0
               OpDecorate %24 ArrayStride 16
               OpMemberDecorate %25 0 Offset 0
               OpDecorate %25 Block
               OpDecorate %27 DescriptorSet 0
               OpDecorate %27 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 142.699997
         %11 = OpTypeInt 32 1
         %14 = OpConstant %6 100
         %15 = OpTypeBool
         %19 = OpTypeVector %6 4
         %20 = OpTypePointer Output %19
         %21 = OpVariable %20 Output
         %22 = OpTypeInt 32 0
         %23 = OpConstant %22 2
         %24 = OpTypeArray %11 %23
         %25 = OpTypeStruct %24
         %26 = OpTypePointer Uniform %25
         %27 = OpVariable %26 Uniform
         %28 = OpConstant %11 0
         %29 = OpConstant %11 1
         %30 = OpTypePointer Uniform %11
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
               OpStore %8 %9
         %10 = OpLoad %6 %8
         %12 = OpConvertFToS %11 %10
         %13 = OpConvertSToF %6 %12
         %16 = OpFOrdGreaterThan %15 %13 %14
               OpSelectionMerge %18 None
               OpBranchConditional %16 %17 %44
         %17 = OpLabel
         %31 = OpAccessChain %30 %27 %28 %29
         %32 = OpLoad %11 %31
         %33 = OpConvertSToF %6 %32
         %34 = OpAccessChain %30 %27 %28 %28
         %35 = OpLoad %11 %34
         %36 = OpConvertSToF %6 %35
         %37 = OpAccessChain %30 %27 %28 %28
         %38 = OpLoad %11 %37
         %39 = OpConvertSToF %6 %38
         %40 = OpAccessChain %30 %27 %28 %29
         %41 = OpLoad %11 %40
         %42 = OpConvertSToF %6 %41
         %43 = OpCompositeConstruct %19 %33 %36 %39 %42
               OpStore %21 %43
               OpBranch %18
         %44 = OpLabel
         %45 = OpAccessChain %30 %27 %28 %28
         %46 = OpLoad %11 %45
         %47 = OpConvertSToF %6 %46
         %48 = OpCompositeConstruct %19 %47 %47 %47 %47
               OpStore %21 %48
               OpBranch %18
         %18 = OpLabel
               OpReturn
               OpFunctionEnd
