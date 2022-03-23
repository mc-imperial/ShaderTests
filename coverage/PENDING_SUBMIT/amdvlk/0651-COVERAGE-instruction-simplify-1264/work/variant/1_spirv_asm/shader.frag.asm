; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 100
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %81
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %11 "a"
               OpName %15 "buf1"
               OpMemberName %15 0 "_GLF_uniform_int_values"
               OpName %17 ""
               OpName %29 "buf2"
               OpMemberName %29 0 "one"
               OpName %31 ""
               OpName %37 "buf0"
               OpMemberName %37 0 "_GLF_uniform_float_values"
               OpName %39 ""
               OpName %81 "_GLF_color"
               OpDecorate %14 ArrayStride 16
               OpMemberDecorate %15 0 Offset 0
               OpDecorate %15 Block
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 1
               OpMemberDecorate %29 0 Offset 0
               OpDecorate %29 Block
               OpDecorate %31 DescriptorSet 0
               OpDecorate %31 Binding 2
               OpDecorate %36 ArrayStride 16
               OpMemberDecorate %37 0 Offset 0
               OpDecorate %37 Block
               OpDecorate %39 DescriptorSet 0
               OpDecorate %39 Binding 0
               OpDecorate %81 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypePointer Function %6
         %12 = OpTypeInt 32 0
         %13 = OpConstant %12 2
         %14 = OpTypeArray %6 %13
         %15 = OpTypeStruct %14
         %16 = OpTypePointer Uniform %15
         %17 = OpVariable %16 Uniform
         %18 = OpTypePointer Uniform %6
         %26 = OpConstant %6 1
         %28 = OpTypeFloat 32
         %29 = OpTypeStruct %28
         %30 = OpTypePointer Uniform %29
         %31 = OpVariable %30 Uniform
         %32 = OpTypePointer Uniform %28
         %35 = OpConstant %12 1
         %36 = OpTypeArray %28 %35
         %37 = OpTypeStruct %36
         %38 = OpTypePointer Uniform %37
         %39 = OpVariable %38 Uniform
         %42 = OpTypeBool
         %55 = OpConstant %6 10
         %79 = OpTypeVector %28 4
         %80 = OpTypePointer Output %79
         %81 = OpVariable %80 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
               OpStore %8 %9
         %19 = OpAccessChain %18 %17 %9 %9
         %20 = OpLoad %6 %19
               OpStore %11 %20
               OpBranch %21
         %21 = OpLabel
               OpLoopMerge %23 %24 None
               OpBranch %22
         %22 = OpLabel
         %25 = OpLoad %6 %8
         %27 = OpIAdd %6 %25 %26
               OpStore %8 %27
         %33 = OpAccessChain %32 %31 %9
         %34 = OpLoad %28 %33
         %40 = OpAccessChain %32 %39 %9 %9
         %41 = OpLoad %28 %40
         %43 = OpFOrdGreaterThan %42 %34 %41
               OpSelectionMerge %45 None
               OpBranchConditional %43 %44 %45
         %44 = OpLabel
               OpStore %11 %9
               OpBranch %46
         %46 = OpLabel
               OpLoopMerge %48 %49 None
               OpBranch %50
         %50 = OpLabel
         %51 = OpLoad %6 %11
         %52 = OpLoad %6 %11
         %53 = OpSLessThan %42 %51 %52
         %54 = OpLoad %6 %8
         %56 = OpSLessThan %42 %54 %55
         %57 = OpLogicalAnd %42 %53 %56
               OpBranchConditional %57 %47 %48
         %47 = OpLabel
         %58 = OpLoad %6 %8
         %59 = OpIAdd %6 %58 %26
               OpStore %8 %59
               OpBranch %49
         %49 = OpLabel
         %60 = OpLoad %6 %11
         %61 = OpIAdd %6 %60 %26
               OpStore %11 %61
               OpBranch %46
         %48 = OpLabel
               OpBranch %45
         %45 = OpLabel
         %62 = OpLoad %6 %11
         %63 = OpLoad %6 %11
         %64 = OpIAdd %6 %62 %63
         %65 = OpAccessChain %18 %17 %9 %9
         %66 = OpLoad %6 %65
         %67 = OpSGreaterThan %42 %64 %66
               OpSelectionMerge %69 None
               OpBranchConditional %67 %68 %69
         %68 = OpLabel
               OpBranch %23
         %69 = OpLabel
               OpBranch %24
         %24 = OpLabel
         %71 = OpLoad %6 %8
         %72 = OpSLessThan %42 %71 %55
               OpBranchConditional %72 %21 %23
         %23 = OpLabel
         %73 = OpLoad %6 %11
         %74 = OpAccessChain %18 %17 %9 %26
         %75 = OpLoad %6 %74
         %76 = OpIEqual %42 %73 %75
               OpSelectionMerge %78 None
               OpBranchConditional %76 %77 %95
         %77 = OpLabel
         %82 = OpAccessChain %18 %17 %9 %9
         %83 = OpLoad %6 %82
         %84 = OpConvertSToF %28 %83
         %85 = OpAccessChain %18 %17 %9 %26
         %86 = OpLoad %6 %85
         %87 = OpConvertSToF %28 %86
         %88 = OpAccessChain %18 %17 %9 %26
         %89 = OpLoad %6 %88
         %90 = OpConvertSToF %28 %89
         %91 = OpAccessChain %18 %17 %9 %9
         %92 = OpLoad %6 %91
         %93 = OpConvertSToF %28 %92
         %94 = OpCompositeConstruct %79 %84 %87 %90 %93
               OpStore %81 %94
               OpBranch %78
         %95 = OpLabel
         %96 = OpAccessChain %18 %17 %9 %26
         %97 = OpLoad %6 %96
         %98 = OpConvertSToF %28 %97
         %99 = OpCompositeConstruct %79 %98 %98 %98 %98
               OpStore %81 %99
               OpBranch %78
         %78 = OpLabel
               OpReturn
               OpFunctionEnd
