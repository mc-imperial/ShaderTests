; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 64
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %38
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "func("
               OpName %24 "buf0"
               OpMemberName %24 0 "_GLF_uniform_float_values"
               OpName %26 ""
               OpName %38 "_GLF_color"
               OpName %41 "buf1"
               OpMemberName %41 0 "_GLF_uniform_int_values"
               OpName %43 ""
               OpDecorate %14 RelaxedPrecision
               OpDecorate %16 RelaxedPrecision
               OpDecorate %23 ArrayStride 16
               OpMemberDecorate %24 0 Offset 0
               OpDecorate %24 Block
               OpDecorate %26 DescriptorSet 0
               OpDecorate %26 Binding 0
               OpDecorate %38 Location 0
               OpDecorate %40 ArrayStride 16
               OpMemberDecorate %41 0 Offset 0
               OpDecorate %41 Block
               OpDecorate %43 DescriptorSet 0
               OpDecorate %43 Binding 1
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeFunction %6
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 1
         %12 = OpTypeVector %6 2
         %15 = OpConstant %10 0
         %17 = OpTypePointer Function %6
         %23 = OpTypeArray %6 %11
         %24 = OpTypeStruct %23
         %25 = OpTypePointer Uniform %24
         %26 = OpVariable %25 Uniform
         %27 = OpTypeInt 32 1
         %28 = OpConstant %27 0
         %29 = OpTypePointer Uniform %6
         %32 = OpTypeBool
         %36 = OpTypeVector %6 4
         %37 = OpTypePointer Output %36
         %38 = OpVariable %37 Output
         %39 = OpConstant %10 2
         %40 = OpTypeArray %27 %39
         %41 = OpTypeStruct %40
         %42 = OpTypePointer Uniform %41
         %43 = OpVariable %42 Uniform
         %44 = OpConstant %27 1
         %45 = OpTypePointer Uniform %27
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %22 = OpFunctionCall %6 %8
         %30 = OpAccessChain %29 %26 %28 %28
         %31 = OpLoad %6 %30
         %33 = OpFOrdEqual %32 %22 %31
               OpSelectionMerge %35 None
               OpBranchConditional %33 %34 %59
         %34 = OpLabel
         %46 = OpAccessChain %45 %43 %28 %44
         %47 = OpLoad %27 %46
         %48 = OpConvertSToF %6 %47
         %49 = OpAccessChain %45 %43 %28 %28
         %50 = OpLoad %27 %49
         %51 = OpConvertSToF %6 %50
         %52 = OpAccessChain %45 %43 %28 %28
         %53 = OpLoad %27 %52
         %54 = OpConvertSToF %6 %53
         %55 = OpAccessChain %45 %43 %28 %44
         %56 = OpLoad %27 %55
         %57 = OpConvertSToF %6 %56
         %58 = OpCompositeConstruct %36 %48 %51 %54 %57
               OpStore %38 %58
               OpBranch %35
         %59 = OpLabel
         %60 = OpAccessChain %45 %43 %28 %28
         %61 = OpLoad %27 %60
         %62 = OpConvertSToF %6 %61
         %63 = OpCompositeConstruct %36 %62 %62 %62 %62
               OpStore %38 %63
               OpBranch %35
         %35 = OpLabel
               OpReturn
               OpFunctionEnd
          %8 = OpFunction %6 None %7
          %9 = OpLabel
         %18 = OpVariable %17 Function
         %13 = OpExtInst %12 %1 UnpackHalf2x16 %11
         %14 = OpExtInst %12 %1 Round %13
         %16 = OpCompositeExtract %6 %14 0
               OpStore %18 %16
         %19 = OpLoad %6 %18
               OpReturnValue %19
               OpFunctionEnd
