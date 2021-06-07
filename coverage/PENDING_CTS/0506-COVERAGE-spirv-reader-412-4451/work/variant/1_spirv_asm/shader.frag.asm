; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 78
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %59
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %13 "func(s21;"
               OpName %12 "s"
               OpName %20 "buf0"
               OpMemberName %20 0 "_GLF_uniform_int_values"
               OpName %22 ""
               OpName %36 "tex"
               OpName %59 "_GLF_color"
               OpDecorate %12 RelaxedPrecision
               OpDecorate %15 RelaxedPrecision
               OpDecorate %19 ArrayStride 16
               OpMemberDecorate %20 0 Offset 0
               OpDecorate %20 Block
               OpDecorate %22 DescriptorSet 0
               OpDecorate %22 Binding 0
               OpDecorate %27 RelaxedPrecision
               OpDecorate %29 RelaxedPrecision
               OpDecorate %30 RelaxedPrecision
               OpDecorate %36 RelaxedPrecision
               OpDecorate %36 DescriptorSet 0
               OpDecorate %36 Binding 1
               OpDecorate %59 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeImage %6 2D 0 0 0 1 Unknown
          %8 = OpTypeSampledImage %7
          %9 = OpTypePointer UniformConstant %8
         %10 = OpTypeVector %6 4
         %11 = OpTypeFunction %10 %9
         %16 = OpTypeInt 32 1
         %17 = OpTypeInt 32 0
         %18 = OpConstant %17 2
         %19 = OpTypeArray %16 %18
         %20 = OpTypeStruct %19
         %21 = OpTypePointer Uniform %20
         %22 = OpVariable %21 Uniform
         %23 = OpConstant %16 0
         %24 = OpTypePointer Uniform %16
         %28 = OpTypeVector %6 2
         %31 = OpTypePointer Function %10
         %36 = OpVariable %9 UniformConstant
         %47 = OpConstant %16 1
         %52 = OpTypeBool
         %53 = OpTypeVector %52 4
         %58 = OpTypePointer Output %10
         %59 = OpVariable %58 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %37 = OpFunctionCall %10 %13 %36
         %38 = OpAccessChain %24 %22 %23 %23
         %39 = OpLoad %16 %38
         %40 = OpConvertSToF %6 %39
         %41 = OpAccessChain %24 %22 %23 %23
         %42 = OpLoad %16 %41
         %43 = OpConvertSToF %6 %42
         %44 = OpAccessChain %24 %22 %23 %23
         %45 = OpLoad %16 %44
         %46 = OpConvertSToF %6 %45
         %48 = OpAccessChain %24 %22 %23 %47
         %49 = OpLoad %16 %48
         %50 = OpConvertSToF %6 %49
         %51 = OpCompositeConstruct %10 %40 %43 %46 %50
         %54 = OpFOrdEqual %53 %37 %51
         %55 = OpAll %52 %54
               OpSelectionMerge %57 None
               OpBranchConditional %55 %56 %73
         %56 = OpLabel
         %60 = OpAccessChain %24 %22 %23 %47
         %61 = OpLoad %16 %60
         %62 = OpConvertSToF %6 %61
         %63 = OpAccessChain %24 %22 %23 %23
         %64 = OpLoad %16 %63
         %65 = OpConvertSToF %6 %64
         %66 = OpAccessChain %24 %22 %23 %23
         %67 = OpLoad %16 %66
         %68 = OpConvertSToF %6 %67
         %69 = OpAccessChain %24 %22 %23 %47
         %70 = OpLoad %16 %69
         %71 = OpConvertSToF %6 %70
         %72 = OpCompositeConstruct %10 %62 %65 %68 %71
               OpStore %59 %72
               OpBranch %57
         %73 = OpLabel
         %74 = OpAccessChain %24 %22 %23 %23
         %75 = OpLoad %16 %74
         %76 = OpConvertSToF %6 %75
         %77 = OpCompositeConstruct %10 %76 %76 %76 %76
               OpStore %59 %77
               OpBranch %57
         %57 = OpLabel
               OpReturn
               OpFunctionEnd
         %13 = OpFunction %10 None %11
         %12 = OpFunctionParameter %9
         %14 = OpLabel
         %32 = OpVariable %31 Function
         %15 = OpLoad %8 %12
         %25 = OpAccessChain %24 %22 %23 %23
         %26 = OpLoad %16 %25
         %27 = OpConvertSToF %6 %26
         %29 = OpCompositeConstruct %28 %27 %27
         %30 = OpImageSampleImplicitLod %10 %15 %29
               OpStore %32 %30
         %33 = OpLoad %10 %32
               OpReturnValue %33
               OpFunctionEnd
