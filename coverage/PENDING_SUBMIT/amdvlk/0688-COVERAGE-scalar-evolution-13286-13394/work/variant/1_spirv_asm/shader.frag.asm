; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 108
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %45 %89
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %11 "a"
               OpName %15 "buf1"
               OpMemberName %15 0 "_GLF_uniform_int_values"
               OpName %17 ""
               OpName %45 "gl_FragCoord"
               OpName %51 "buf0"
               OpMemberName %51 0 "_GLF_uniform_float_values"
               OpName %53 ""
               OpName %63 "i"
               OpName %89 "_GLF_color"
               OpDecorate %14 ArrayStride 16
               OpMemberDecorate %15 0 Offset 0
               OpDecorate %15 Block
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 1
               OpDecorate %45 BuiltIn FragCoord
               OpDecorate %50 ArrayStride 16
               OpMemberDecorate %51 0 Offset 0
               OpDecorate %51 Block
               OpDecorate %53 DescriptorSet 0
               OpDecorate %53 Binding 0
               OpDecorate %89 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypePointer Function %6
         %12 = OpTypeInt 32 0
         %13 = OpConstant %12 3
         %14 = OpTypeArray %6 %13
         %15 = OpTypeStruct %14
         %16 = OpTypePointer Uniform %15
         %17 = OpVariable %16 Uniform
         %18 = OpTypePointer Uniform %6
         %27 = OpConstant %6 10
         %28 = OpTypeBool
         %31 = OpConstant %6 1
         %42 = OpTypeFloat 32
         %43 = OpTypeVector %42 4
         %44 = OpTypePointer Input %43
         %45 = OpVariable %44 Input
         %46 = OpConstant %12 1
         %47 = OpTypePointer Input %42
         %50 = OpTypeArray %42 %46
         %51 = OpTypeStruct %50
         %52 = OpTypePointer Uniform %51
         %53 = OpVariable %52 Uniform
         %54 = OpTypePointer Uniform %42
         %64 = OpConstant %6 4
         %77 = OpConstant %6 2
         %88 = OpTypePointer Output %43
         %89 = OpVariable %88 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %63 = OpVariable %10 Function
               OpStore %8 %9
         %19 = OpAccessChain %18 %17 %9 %9
         %20 = OpLoad %6 %19
               OpStore %11 %20
               OpBranch %21
         %21 = OpLabel
               OpLoopMerge %23 %24 None
               OpBranch %25
         %25 = OpLabel
         %26 = OpLoad %6 %8
         %29 = OpSLessThan %28 %26 %27
               OpBranchConditional %29 %22 %23
         %22 = OpLabel
         %30 = OpLoad %6 %8
         %32 = OpIAdd %6 %30 %31
               OpStore %8 %32
               OpBranch %33
         %33 = OpLabel
               OpLoopMerge %35 %36 None
               OpBranch %37
         %37 = OpLabel
         %38 = OpLoad %6 %8
         %39 = OpSLessThan %28 %38 %27
               OpBranchConditional %39 %34 %35
         %34 = OpLabel
         %40 = OpLoad %6 %8
         %41 = OpIAdd %6 %40 %31
               OpStore %8 %41
         %48 = OpAccessChain %47 %45 %46
         %49 = OpLoad %42 %48
         %55 = OpAccessChain %54 %53 %9 %9
         %56 = OpLoad %42 %55
         %57 = OpFOrdLessThan %28 %49 %56
               OpSelectionMerge %59 None
               OpBranchConditional %57 %58 %59
         %58 = OpLabel
               OpReturn
         %59 = OpLabel
         %61 = OpAccessChain %18 %17 %9 %31
         %62 = OpLoad %6 %61
               OpStore %11 %62
               OpBranch %36
         %36 = OpLabel
               OpBranch %33
         %35 = OpLabel
               OpStore %63 %64
               OpBranch %65
         %65 = OpLabel
               OpLoopMerge %67 %68 None
               OpBranch %69
         %69 = OpLabel
         %70 = OpLoad %6 %63
         %71 = OpSGreaterThanEqual %28 %70 %9
         %72 = OpLoad %6 %8
         %73 = OpSLessThan %28 %72 %27
         %74 = OpLogicalAnd %28 %71 %73
               OpBranchConditional %74 %66 %67
         %66 = OpLabel
         %75 = OpLoad %6 %8
         %76 = OpIAdd %6 %75 %31
               OpStore %8 %76
         %78 = OpAccessChain %18 %17 %9 %77
         %79 = OpLoad %6 %78
               OpStore %11 %79
               OpBranch %68
         %68 = OpLabel
         %80 = OpLoad %6 %63
         %81 = OpISub %6 %80 %31
               OpStore %63 %81
               OpBranch %65
         %67 = OpLabel
               OpBranch %24
         %24 = OpLabel
               OpBranch %21
         %23 = OpLabel
         %82 = OpLoad %6 %11
         %83 = OpAccessChain %18 %17 %9 %31
         %84 = OpLoad %6 %83
         %85 = OpIEqual %28 %82 %84
               OpSelectionMerge %87 None
               OpBranchConditional %85 %86 %103
         %86 = OpLabel
         %90 = OpAccessChain %18 %17 %9 %31
         %91 = OpLoad %6 %90
         %92 = OpConvertSToF %42 %91
         %93 = OpAccessChain %18 %17 %9 %9
         %94 = OpLoad %6 %93
         %95 = OpConvertSToF %42 %94
         %96 = OpAccessChain %18 %17 %9 %9
         %97 = OpLoad %6 %96
         %98 = OpConvertSToF %42 %97
         %99 = OpAccessChain %18 %17 %9 %31
        %100 = OpLoad %6 %99
        %101 = OpConvertSToF %42 %100
        %102 = OpCompositeConstruct %43 %92 %95 %98 %101
               OpStore %89 %102
               OpBranch %87
        %103 = OpLabel
        %104 = OpAccessChain %18 %17 %9 %9
        %105 = OpLoad %6 %104
        %106 = OpConvertSToF %42 %105
        %107 = OpCompositeConstruct %43 %106 %106 %106 %106
               OpStore %89 %107
               OpBranch %87
         %87 = OpLabel
               OpReturn
               OpFunctionEnd
