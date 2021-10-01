; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 95
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %9 %76
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "gl_FragCoord"
               OpName %17 "buf1"
               OpMemberName %17 0 "_GLF_uniform_float_values"
               OpName %19 ""
               OpName %47 "i"
               OpName %49 "buf0"
               OpMemberName %49 0 "_GLF_uniform_int_values"
               OpName %51 ""
               OpName %76 "_GLF_color"
               OpName %82 "tex"
               OpDecorate %9 BuiltIn FragCoord
               OpDecorate %16 ArrayStride 16
               OpMemberDecorate %17 0 Offset 0
               OpDecorate %17 Block
               OpDecorate %19 DescriptorSet 0
               OpDecorate %19 Binding 1
               OpDecorate %48 ArrayStride 16
               OpMemberDecorate %49 0 Offset 0
               OpDecorate %49 Block
               OpDecorate %51 DescriptorSet 0
               OpDecorate %51 Binding 0
               OpDecorate %76 Location 0
               OpDecorate %82 RelaxedPrecision
               OpDecorate %82 DescriptorSet 0
               OpDecorate %82 Binding 2
               OpDecorate %83 RelaxedPrecision
               OpDecorate %87 RelaxedPrecision
               OpDecorate %88 RelaxedPrecision
               OpDecorate %90 RelaxedPrecision
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Input %7
          %9 = OpVariable %8 Input
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 1
         %12 = OpTypePointer Input %6
         %15 = OpConstant %10 2
         %16 = OpTypeArray %6 %15
         %17 = OpTypeStruct %16
         %18 = OpTypePointer Uniform %17
         %19 = OpVariable %18 Uniform
         %20 = OpTypeInt 32 1
         %21 = OpConstant %20 0
         %22 = OpTypePointer Uniform %6
         %25 = OpTypeBool
         %30 = OpConstant %10 0
         %46 = OpTypePointer Function %20
         %48 = OpTypeArray %20 %15
         %49 = OpTypeStruct %48
         %50 = OpTypePointer Uniform %49
         %51 = OpVariable %50 Uniform
         %52 = OpConstant %20 1
         %53 = OpTypePointer Uniform %20
         %75 = OpTypePointer Output %7
         %76 = OpVariable %75 Output
         %79 = OpTypeImage %6 2D 0 0 0 1 Unknown
         %80 = OpTypeSampledImage %79
         %81 = OpTypePointer UniformConstant %80
         %82 = OpVariable %81 UniformConstant
         %86 = OpTypeVector %6 2
         %89 = OpTypeVector %6 3
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %47 = OpVariable %46 Function
         %13 = OpAccessChain %12 %9 %11
         %14 = OpLoad %6 %13
         %23 = OpAccessChain %22 %19 %21 %21
         %24 = OpLoad %6 %23
         %26 = OpFOrdLessThan %25 %14 %24
               OpSelectionMerge %28 None
               OpBranchConditional %26 %27 %28
         %27 = OpLabel
               OpReturn
         %28 = OpLabel
         %31 = OpAccessChain %12 %9 %30
         %32 = OpLoad %6 %31
         %33 = OpAccessChain %22 %19 %21 %21
         %34 = OpLoad %6 %33
         %35 = OpFOrdLessThan %25 %32 %34
               OpSelectionMerge %37 None
               OpBranchConditional %35 %36 %37
         %36 = OpLabel
         %38 = OpAccessChain %12 %9 %30
         %39 = OpLoad %6 %38
         %40 = OpAccessChain %22 %19 %21 %21
         %41 = OpLoad %6 %40
         %42 = OpFOrdLessThan %25 %39 %41
               OpSelectionMerge %44 None
               OpBranchConditional %42 %43 %44
         %43 = OpLabel
               OpReturn
         %44 = OpLabel
         %54 = OpAccessChain %53 %51 %21 %52
         %55 = OpLoad %20 %54
               OpStore %47 %55
               OpBranch %56
         %56 = OpLabel
               OpLoopMerge %58 %59 None
               OpBranch %60
         %60 = OpLabel
         %61 = OpLoad %20 %47
         %62 = OpAccessChain %53 %51 %21 %21
         %63 = OpLoad %20 %62
         %64 = OpSLessThan %25 %61 %63
               OpBranchConditional %64 %57 %58
         %57 = OpLabel
         %65 = OpAccessChain %12 %9 %30
         %66 = OpLoad %6 %65
         %67 = OpAccessChain %22 %19 %21 %52
         %68 = OpLoad %6 %67
         %69 = OpFOrdLessThan %25 %66 %68
               OpSelectionMerge %71 None
               OpBranchConditional %69 %70 %71
         %70 = OpLabel
               OpReturn
         %71 = OpLabel
               OpBranch %59
         %59 = OpLabel
         %73 = OpLoad %20 %47
         %74 = OpIAdd %20 %73 %52
               OpStore %47 %74
               OpBranch %56
         %58 = OpLabel
               OpBranch %37
         %37 = OpLabel
         %77 = OpAccessChain %22 %19 %21 %52
         %78 = OpLoad %6 %77
         %83 = OpLoad %80 %82
         %84 = OpAccessChain %22 %19 %21 %52
         %85 = OpLoad %6 %84
         %87 = OpCompositeConstruct %86 %85 %85
         %88 = OpImageSampleImplicitLod %7 %83 %87
         %90 = OpVectorShuffle %89 %88 %88 1 2 3
         %91 = OpCompositeExtract %6 %90 0
         %92 = OpCompositeExtract %6 %90 1
         %93 = OpCompositeExtract %6 %90 2
         %94 = OpCompositeConstruct %7 %78 %91 %92 %93
               OpStore %76 %94
               OpReturn
               OpFunctionEnd
