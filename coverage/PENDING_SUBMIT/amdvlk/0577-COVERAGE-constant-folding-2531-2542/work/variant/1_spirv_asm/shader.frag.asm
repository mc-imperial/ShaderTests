; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 57
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %34
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %11 "buf0"
               OpMemberName %11 0 "_GLF_uniform_uint_values"
               OpName %13 ""
               OpName %21 "ResType"
               OpName %34 "_GLF_color"
               OpName %36 "buf1"
               OpMemberName %36 0 "_GLF_uniform_int_values"
               OpName %38 ""
               OpDecorate %10 ArrayStride 16
               OpMemberDecorate %11 0 Offset 0
               OpDecorate %11 Block
               OpDecorate %13 DescriptorSet 0
               OpDecorate %13 Binding 0
               OpDecorate %34 Location 0
               OpDecorate %35 ArrayStride 16
               OpMemberDecorate %36 0 Offset 0
               OpDecorate %36 Block
               OpDecorate %38 DescriptorSet 0
               OpDecorate %38 Binding 1
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 0
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 2
         %10 = OpTypeArray %6 %9
         %11 = OpTypeStruct %10
         %12 = OpTypePointer Uniform %11
         %13 = OpVariable %12 Uniform
         %14 = OpTypeInt 32 1
         %15 = OpConstant %14 0
         %16 = OpConstant %14 1
         %17 = OpTypePointer Uniform %6
         %20 = OpConstant %6 1
         %21 = OpTypeStruct %6 %6
         %27 = OpTypeBool
         %31 = OpTypeFloat 32
         %32 = OpTypeVector %31 4
         %33 = OpTypePointer Output %32
         %34 = OpVariable %33 Output
         %35 = OpTypeArray %14 %9
         %36 = OpTypeStruct %35
         %37 = OpTypePointer Uniform %36
         %38 = OpVariable %37 Uniform
         %39 = OpTypePointer Uniform %14
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %18 = OpAccessChain %17 %13 %15 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
         %22 = OpIAddCarry %21 %20 %20
         %23 = OpCompositeExtract %6 %22 1
               OpStore %8 %23
         %24 = OpCompositeExtract %6 %22 0
         %25 = OpAccessChain %17 %13 %15 %15
         %26 = OpLoad %6 %25
         %28 = OpIEqual %27 %24 %26
               OpSelectionMerge %30 None
               OpBranchConditional %28 %29 %52
         %29 = OpLabel
         %40 = OpAccessChain %39 %38 %15 %15
         %41 = OpLoad %14 %40
         %42 = OpConvertSToF %31 %41
         %43 = OpLoad %6 %8
         %44 = OpConvertUToF %31 %43
         %45 = OpAccessChain %39 %38 %15 %16
         %46 = OpLoad %14 %45
         %47 = OpConvertSToF %31 %46
         %48 = OpAccessChain %39 %38 %15 %15
         %49 = OpLoad %14 %48
         %50 = OpConvertSToF %31 %49
         %51 = OpCompositeConstruct %32 %42 %44 %47 %50
               OpStore %34 %51
               OpBranch %30
         %52 = OpLabel
         %53 = OpAccessChain %39 %38 %15 %16
         %54 = OpLoad %14 %53
         %55 = OpConvertSToF %31 %54
         %56 = OpCompositeConstruct %32 %55 %55 %55 %55
               OpStore %34 %56
               OpBranch %30
         %30 = OpLabel
               OpReturn
               OpFunctionEnd
