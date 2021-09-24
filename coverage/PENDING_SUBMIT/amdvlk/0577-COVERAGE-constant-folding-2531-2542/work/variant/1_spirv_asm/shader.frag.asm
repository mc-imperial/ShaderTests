; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 58
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
               OpBranchConditional %28 %29 %53
         %29 = OpLabel
         %40 = OpAccessChain %39 %38 %15 %15
         %41 = OpLoad %14 %40
         %42 = OpConvertSToF %31 %41
         %43 = OpAccessChain %39 %38 %15 %16
         %44 = OpLoad %14 %43
         %45 = OpConvertSToF %31 %44
         %46 = OpAccessChain %39 %38 %15 %16
         %47 = OpLoad %14 %46
         %48 = OpConvertSToF %31 %47
         %49 = OpAccessChain %39 %38 %15 %15
         %50 = OpLoad %14 %49
         %51 = OpConvertSToF %31 %50
         %52 = OpCompositeConstruct %32 %42 %45 %48 %51
               OpStore %34 %52
               OpBranch %30
         %53 = OpLabel
         %54 = OpAccessChain %39 %38 %15 %16
         %55 = OpLoad %14 %54
         %56 = OpConvertSToF %31 %55
         %57 = OpCompositeConstruct %32 %56 %56 %56 %56
               OpStore %34 %57
               OpBranch %30
         %30 = OpLabel
               OpReturn
               OpFunctionEnd
