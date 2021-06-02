; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 60
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %15 %36
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f0"
               OpName %10 "f1"
               OpName %15 "gl_FragCoord"
               OpName %23 "buf0"
               OpMemberName %23 0 "_GLF_uniform_float_values"
               OpName %25 ""
               OpName %36 "_GLF_color"
               OpName %39 "buf1"
               OpMemberName %39 0 "_GLF_uniform_int_values"
               OpName %41 ""
               OpDecorate %15 BuiltIn FragCoord
               OpDecorate %22 ArrayStride 16
               OpMemberDecorate %23 0 Offset 0
               OpDecorate %23 Block
               OpDecorate %25 DescriptorSet 0
               OpDecorate %25 Binding 0
               OpDecorate %36 Location 0
               OpDecorate %38 ArrayStride 16
               OpMemberDecorate %39 0 Offset 0
               OpDecorate %39 Block
               OpDecorate %41 DescriptorSet 0
               OpDecorate %41 Binding 1
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 0x1.8p+128
         %13 = OpTypeVector %6 4
         %14 = OpTypePointer Input %13
         %15 = OpVariable %14 Input
         %16 = OpTypeInt 32 0
         %17 = OpConstant %16 0
         %18 = OpTypePointer Input %6
         %21 = OpConstant %16 1
         %22 = OpTypeArray %6 %21
         %23 = OpTypeStruct %22
         %24 = OpTypePointer Uniform %23
         %25 = OpVariable %24 Uniform
         %26 = OpTypeInt 32 1
         %27 = OpConstant %26 0
         %28 = OpTypePointer Uniform %6
         %31 = OpTypeBool
         %35 = OpTypePointer Output %13
         %36 = OpVariable %35 Output
         %37 = OpConstant %16 2
         %38 = OpTypeArray %26 %37
         %39 = OpTypeStruct %38
         %40 = OpTypePointer Uniform %39
         %41 = OpVariable %40 Uniform
         %42 = OpConstant %26 1
         %43 = OpTypePointer Uniform %26
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %10 = OpVariable %7 Function
               OpStore %8 %9
         %11 = OpLoad %6 %8
         %12 = OpExtInst %6 %1 Fract %11
               OpStore %10 %12
         %19 = OpAccessChain %18 %15 %17
         %20 = OpLoad %6 %19
         %29 = OpAccessChain %28 %25 %27 %27
         %30 = OpLoad %6 %29
         %32 = OpFOrdGreaterThan %31 %20 %30
               OpSelectionMerge %34 None
               OpBranchConditional %32 %33 %57
         %33 = OpLabel
         %44 = OpAccessChain %43 %41 %27 %42
         %45 = OpLoad %26 %44
         %46 = OpConvertSToF %6 %45
         %47 = OpAccessChain %43 %41 %27 %27
         %48 = OpLoad %26 %47
         %49 = OpConvertSToF %6 %48
         %50 = OpAccessChain %43 %41 %27 %27
         %51 = OpLoad %26 %50
         %52 = OpConvertSToF %6 %51
         %53 = OpAccessChain %43 %41 %27 %42
         %54 = OpLoad %26 %53
         %55 = OpConvertSToF %6 %54
         %56 = OpCompositeConstruct %13 %46 %49 %52 %55
               OpStore %36 %56
               OpBranch %34
         %57 = OpLabel
         %58 = OpLoad %6 %10
         %59 = OpCompositeConstruct %13 %58 %58 %58 %58
               OpStore %36 %59
               OpBranch %34
         %34 = OpLabel
               OpReturn
               OpFunctionEnd
