; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 94
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %13
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %13 "_GLF_color"
               OpName %17 "tex"
               OpName %22 "buf0"
               OpMemberName %22 0 "_GLF_uniform_float_values"
               OpName %24 ""
               OpName %32 "v"
               OpName %37 "a"
               OpName %64 "buf1"
               OpMemberName %64 0 "_GLF_uniform_int_values"
               OpName %66 ""
               OpDecorate %13 Location 0
               OpDecorate %17 RelaxedPrecision
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 2
               OpDecorate %18 RelaxedPrecision
               OpDecorate %21 ArrayStride 16
               OpMemberDecorate %22 0 Offset 0
               OpDecorate %22 Block
               OpDecorate %24 DescriptorSet 0
               OpDecorate %24 Binding 0
               OpDecorate %29 RelaxedPrecision
               OpDecorate %30 RelaxedPrecision
               OpDecorate %63 ArrayStride 16
               OpMemberDecorate %64 0 Offset 0
               OpDecorate %64 Block
               OpDecorate %66 DescriptorSet 0
               OpDecorate %66 Binding 1
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypeFloat 32
         %11 = OpTypeVector %10 4
         %12 = OpTypePointer Output %11
         %13 = OpVariable %12 Output
         %14 = OpTypeImage %10 2D 0 0 0 1 Unknown
         %15 = OpTypeSampledImage %14
         %16 = OpTypePointer UniformConstant %15
         %17 = OpVariable %16 UniformConstant
         %19 = OpTypeInt 32 0
         %20 = OpConstant %19 1
         %21 = OpTypeArray %10 %20
         %22 = OpTypeStruct %21
         %23 = OpTypePointer Uniform %22
         %24 = OpVariable %23 Uniform
         %25 = OpTypePointer Uniform %10
         %28 = OpTypeVector %10 2
         %31 = OpTypePointer Function %28
         %36 = OpTypePointer Function %6
         %43 = OpTypeBool
         %45 = OpConstant %6 1
         %50 = OpTypePointer Function %10
         %53 = OpConstant %10 1
         %57 = OpConstant %6 10
         %62 = OpConstant %19 2
         %63 = OpTypeArray %6 %62
         %64 = OpTypeStruct %63
         %65 = OpTypePointer Uniform %64
         %66 = OpVariable %65 Uniform
         %67 = OpTypePointer Uniform %6
         %81 = OpConstant %10 2
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %32 = OpVariable %31 Function
         %37 = OpVariable %36 Function
               OpStore %8 %9
         %18 = OpLoad %15 %17
         %26 = OpAccessChain %25 %24 %9 %9
         %27 = OpLoad %10 %26
         %29 = OpCompositeConstruct %28 %27 %27
         %30 = OpImageSampleImplicitLod %11 %18 %29
               OpStore %13 %30
         %33 = OpAccessChain %25 %24 %9 %9
         %34 = OpLoad %10 %33
         %35 = OpCompositeConstruct %28 %34 %34
               OpStore %32 %35
               OpStore %37 %9
               OpBranch %38
         %38 = OpLabel
               OpLoopMerge %40 %41 None
               OpBranch %42
         %42 = OpLabel
         %44 = OpLoad %6 %37
         %46 = OpSLessThan %43 %44 %45
         %47 = OpLogicalNot %43 %46
               OpSelectionMerge %49 None
               OpBranchConditional %47 %48 %49
         %48 = OpLabel
         %51 = OpAccessChain %50 %32 %20
         %52 = OpLoad %10 %51
         %54 = OpFOrdGreaterThan %43 %52 %53
               OpBranch %49
         %49 = OpLabel
         %55 = OpPhi %43 %46 %42 %54 %48
         %56 = OpLoad %6 %8
         %58 = OpSLessThan %43 %56 %57
         %59 = OpLogicalAnd %43 %55 %58
               OpBranchConditional %59 %39 %40
         %39 = OpLabel
         %60 = OpLoad %6 %8
         %61 = OpIAdd %6 %60 %45
               OpStore %8 %61
         %68 = OpAccessChain %67 %66 %9 %9
         %69 = OpLoad %6 %68
         %70 = OpConvertSToF %10 %69
         %71 = OpAccessChain %67 %66 %9 %45
         %72 = OpLoad %6 %71
         %73 = OpConvertSToF %10 %72
         %74 = OpAccessChain %67 %66 %9 %45
         %75 = OpLoad %6 %74
         %76 = OpConvertSToF %10 %75
         %77 = OpAccessChain %67 %66 %9 %9
         %78 = OpLoad %6 %77
         %79 = OpConvertSToF %10 %78
         %80 = OpCompositeConstruct %11 %70 %73 %76 %79
               OpStore %13 %80
         %82 = OpLoad %28 %32
         %83 = OpVectorTimesScalar %28 %82 %81
               OpStore %32 %83
         %84 = OpLoad %6 %37
         %85 = OpIAdd %6 %84 %45
               OpStore %37 %85
               OpBranch %41
         %41 = OpLabel
               OpBranch %38
         %40 = OpLabel
         %86 = OpLoad %6 %8
         %87 = OpINotEqual %43 %86 %57
               OpSelectionMerge %89 None
               OpBranchConditional %87 %88 %89
         %88 = OpLabel
         %90 = OpAccessChain %67 %66 %9 %45
         %91 = OpLoad %6 %90
         %92 = OpConvertSToF %10 %91
         %93 = OpCompositeConstruct %11 %92 %92 %92 %92
               OpStore %13 %93
               OpBranch %89
         %89 = OpLabel
               OpReturn
               OpFunctionEnd
