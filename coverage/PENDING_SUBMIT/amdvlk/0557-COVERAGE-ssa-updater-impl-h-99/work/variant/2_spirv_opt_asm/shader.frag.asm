; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 105
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
         %97 = OpConstantFalse %25
        %100 = OpConstantTrue %25
          %4 = OpFunction %2 None %3
          %5 = OpLabel
               OpSelectionMerge %95 None
               OpSwitch %30 %96
         %96 = OpLabel
         %13 = OpAccessChain %12 %9 %11
         %14 = OpLoad %6 %13
         %23 = OpAccessChain %22 %19 %21 %21
         %24 = OpLoad %6 %23
         %26 = OpFOrdLessThan %25 %14 %24
               OpSelectionMerge %28 None
               OpBranchConditional %26 %27 %28
         %27 = OpLabel
               OpBranch %95
         %28 = OpLabel
         %31 = OpAccessChain %12 %9 %30
         %32 = OpLoad %6 %31
         %35 = OpFOrdLessThan %25 %32 %24
               OpSelectionMerge %37 None
               OpBranchConditional %35 %36 %37
         %36 = OpLabel
               OpSelectionMerge %44 None
               OpBranchConditional %35 %43 %44
         %43 = OpLabel
               OpBranch %95
         %44 = OpLabel
         %54 = OpAccessChain %53 %51 %21 %52
         %55 = OpLoad %20 %54
               OpBranch %56
         %56 = OpLabel
        %103 = OpPhi %20 %55 %44 %74 %59
         %62 = OpAccessChain %53 %51 %21 %21
         %63 = OpLoad %20 %62
         %64 = OpSLessThan %25 %103 %63
               OpLoopMerge %58 %59 None
               OpBranchConditional %64 %57 %58
         %57 = OpLabel
         %67 = OpAccessChain %22 %19 %21 %52
         %68 = OpLoad %6 %67
         %69 = OpFOrdLessThan %25 %32 %68
               OpSelectionMerge %71 None
               OpBranchConditional %69 %70 %71
         %70 = OpLabel
               OpBranch %58
         %71 = OpLabel
               OpBranch %59
         %59 = OpLabel
         %74 = OpIAdd %20 %103 %52
               OpBranch %56
         %58 = OpLabel
        %104 = OpPhi %25 %97 %56 %100 %70
               OpSelectionMerge %101 None
               OpBranchConditional %104 %95 %101
        %101 = OpLabel
               OpBranch %37
         %37 = OpLabel
         %77 = OpAccessChain %22 %19 %21 %52
         %78 = OpLoad %6 %77
         %83 = OpLoad %80 %82
         %87 = OpCompositeConstruct %86 %78 %78
         %88 = OpImageSampleImplicitLod %7 %83 %87
         %91 = OpCompositeExtract %6 %88 1
         %92 = OpCompositeExtract %6 %88 2
         %93 = OpCompositeExtract %6 %88 3
         %94 = OpCompositeConstruct %7 %78 %91 %92 %93
               OpStore %76 %94
               OpBranch %95
         %95 = OpLabel
               OpReturn
               OpFunctionEnd
