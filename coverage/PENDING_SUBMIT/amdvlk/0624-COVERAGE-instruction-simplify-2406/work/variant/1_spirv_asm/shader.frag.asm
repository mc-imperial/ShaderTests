; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 87
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %13 %44
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %13 "_GLF_color"
               OpName %17 "buf0"
               OpMemberName %17 0 "_GLF_uniform_int_values"
               OpName %19 ""
               OpName %25 "buf2"
               OpMemberName %25 0 "one"
               OpName %27 ""
               OpName %33 "buf1"
               OpMemberName %33 0 "_GLF_uniform_float_values"
               OpName %35 ""
               OpName %44 "gl_FragCoord"
               OpDecorate %13 Location 0
               OpDecorate %16 ArrayStride 16
               OpMemberDecorate %17 0 Offset 0
               OpDecorate %17 Block
               OpDecorate %19 DescriptorSet 0
               OpDecorate %19 Binding 0
               OpMemberDecorate %25 0 Offset 0
               OpDecorate %25 Block
               OpDecorate %27 DescriptorSet 0
               OpDecorate %27 Binding 2
               OpDecorate %32 ArrayStride 16
               OpMemberDecorate %33 0 Offset 0
               OpDecorate %33 Block
               OpDecorate %35 DescriptorSet 0
               OpDecorate %35 Binding 1
               OpDecorate %44 BuiltIn FragCoord
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
         %14 = OpTypeInt 32 0
         %15 = OpConstant %14 2
         %16 = OpTypeArray %6 %15
         %17 = OpTypeStruct %16
         %18 = OpTypePointer Uniform %17
         %19 = OpVariable %18 Uniform
         %20 = OpTypePointer Uniform %6
         %25 = OpTypeStruct %10
         %26 = OpTypePointer Uniform %25
         %27 = OpVariable %26 Uniform
         %28 = OpTypePointer Uniform %10
         %31 = OpConstant %14 1
         %32 = OpTypeArray %10 %31
         %33 = OpTypeStruct %32
         %34 = OpTypePointer Uniform %33
         %35 = OpVariable %34 Uniform
         %38 = OpTypeBool
         %43 = OpTypePointer Input %11
         %44 = OpVariable %43 Input
         %45 = OpTypePointer Input %10
         %48 = OpConstant %10 0
         %65 = OpConstant %6 10
         %68 = OpConstant %6 1
          %4 = OpFunction %2 None %3
          %5 = OpLabel
               OpStore %8 %9
         %21 = OpAccessChain %20 %19 %9 %9
         %22 = OpLoad %6 %21
         %23 = OpConvertSToF %10 %22
         %24 = OpCompositeConstruct %11 %23 %23 %23 %23
               OpStore %13 %24
         %29 = OpAccessChain %28 %27 %9
         %30 = OpLoad %10 %29
         %36 = OpAccessChain %28 %35 %9 %9
         %37 = OpLoad %10 %36
         %39 = OpFOrdLessThan %38 %30 %37
               OpSelectionMerge %41 None
               OpBranchConditional %39 %40 %42
         %40 = OpLabel
               OpBranch %41
         %42 = OpLabel
         %46 = OpAccessChain %45 %44 %31
         %47 = OpLoad %10 %46
         %49 = OpFOrdLessThan %38 %47 %48
               OpSelectionMerge %51 None
               OpBranchConditional %49 %50 %52
         %50 = OpLabel
               OpBranch %51
         %52 = OpLabel
         %53 = OpAccessChain %45 %44 %31
         %54 = OpLoad %10 %53
         %55 = OpFOrdLessThan %38 %54 %48
               OpSelectionMerge %57 None
               OpBranchConditional %55 %56 %57
         %56 = OpLabel
               OpReturn
         %57 = OpLabel
               OpBranch %51
         %51 = OpLabel
               OpBranch %41
         %41 = OpLabel
               OpBranch %59
         %59 = OpLabel
               OpLoopMerge %61 %62 None
               OpBranch %63
         %63 = OpLabel
         %64 = OpLoad %6 %8
         %66 = OpSLessThan %38 %64 %65
               OpBranchConditional %66 %60 %61
         %60 = OpLabel
         %67 = OpLoad %6 %8
         %69 = OpIAdd %6 %67 %68
               OpStore %8 %69
               OpBranch %62
         %62 = OpLabel
               OpBranch %59
         %61 = OpLabel
         %70 = OpLoad %6 %8
         %71 = OpIEqual %38 %70 %65
               OpSelectionMerge %73 None
               OpBranchConditional %71 %72 %73
         %72 = OpLabel
         %74 = OpAccessChain %20 %19 %9 %68
         %75 = OpLoad %6 %74
         %76 = OpConvertSToF %10 %75
         %77 = OpAccessChain %20 %19 %9 %9
         %78 = OpLoad %6 %77
         %79 = OpConvertSToF %10 %78
         %80 = OpAccessChain %20 %19 %9 %9
         %81 = OpLoad %6 %80
         %82 = OpConvertSToF %10 %81
         %83 = OpAccessChain %20 %19 %9 %68
         %84 = OpLoad %6 %83
         %85 = OpConvertSToF %10 %84
         %86 = OpCompositeConstruct %11 %76 %79 %82 %85
               OpStore %13 %86
               OpBranch %73
         %73 = OpLabel
               OpReturn
               OpFunctionEnd
