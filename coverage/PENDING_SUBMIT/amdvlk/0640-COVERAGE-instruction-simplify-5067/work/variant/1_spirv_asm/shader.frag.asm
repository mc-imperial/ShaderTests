; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 84
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %67
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %13 "func(vi2;"
               OpName %12 "v"
               OpName %16 "_GLF_global_loop_count"
               OpName %37 "buf0"
               OpMemberName %37 0 "_GLF_uniform_int_values"
               OpName %39 ""
               OpName %67 "_GLF_color"
               OpName %74 "buf1"
               OpMemberName %74 0 "resolution"
               OpName %76 ""
               OpName %82 "param"
               OpDecorate %36 ArrayStride 16
               OpMemberDecorate %37 0 Offset 0
               OpDecorate %37 Block
               OpDecorate %39 DescriptorSet 0
               OpDecorate %39 Binding 0
               OpDecorate %67 Location 0
               OpMemberDecorate %74 0 Offset 0
               OpDecorate %74 Block
               OpDecorate %76 DescriptorSet 0
               OpDecorate %76 Binding 1
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeVector %6 2
          %8 = OpTypePointer Function %7
          %9 = OpTypeFloat 32
         %10 = OpTypeVector %9 4
         %11 = OpTypeFunction %10 %8
         %15 = OpTypePointer Private %6
         %16 = OpVariable %15 Private
         %17 = OpConstant %6 0
         %24 = OpConstant %6 100
         %25 = OpTypeBool
         %28 = OpConstant %6 1
         %30 = OpTypeInt 32 0
         %31 = OpConstant %30 0
         %32 = OpTypePointer Function %6
         %35 = OpConstant %30 2
         %36 = OpTypeArray %6 %35
         %37 = OpTypeStruct %36
         %38 = OpTypePointer Uniform %37
         %39 = OpVariable %38 Uniform
         %40 = OpTypePointer Uniform %6
         %66 = OpTypePointer Output %10
         %67 = OpVariable %66 Output
         %68 = OpConstant %9 0
         %72 = OpTypeVector %9 2
         %74 = OpTypeStruct %72
         %75 = OpTypePointer Uniform %74
         %76 = OpVariable %75 Uniform
         %77 = OpTypePointer Uniform %72
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %82 = OpVariable %8 Function
               OpStore %16 %17
         %69 = OpAccessChain %40 %39 %17 %28
         %70 = OpLoad %6 %69
         %71 = OpConvertSToF %9 %70
         %73 = OpCompositeConstruct %72 %68 %71
         %78 = OpAccessChain %77 %76 %17
         %79 = OpLoad %72 %78
         %80 = OpFDiv %72 %73 %79
         %81 = OpConvertFToS %7 %80
               OpStore %82 %81
         %83 = OpFunctionCall %10 %13 %82
               OpStore %67 %83
               OpReturn
               OpFunctionEnd
         %13 = OpFunction %10 None %11
         %12 = OpFunctionParameter %8
         %14 = OpLabel
               OpBranch %18
         %18 = OpLabel
               OpLoopMerge %20 %21 None
               OpBranch %22
         %22 = OpLabel
         %23 = OpLoad %6 %16
         %26 = OpSLessThan %25 %23 %24
               OpBranchConditional %26 %19 %20
         %19 = OpLabel
         %27 = OpLoad %6 %16
         %29 = OpIAdd %6 %27 %28
               OpStore %16 %29
         %33 = OpAccessChain %32 %12 %31
         %34 = OpLoad %6 %33
         %41 = OpAccessChain %40 %39 %17 %28
         %42 = OpLoad %6 %41
         %43 = OpSLessThan %25 %34 %42
               OpSelectionMerge %45 None
               OpBranchConditional %43 %44 %45
         %44 = OpLabel
         %46 = OpAccessChain %40 %39 %17 %28
         %47 = OpLoad %6 %46
         %48 = OpConvertSToF %9 %47
         %49 = OpAccessChain %40 %39 %17 %17
         %50 = OpLoad %6 %49
         %51 = OpConvertSToF %9 %50
         %52 = OpAccessChain %40 %39 %17 %17
         %53 = OpLoad %6 %52
         %54 = OpConvertSToF %9 %53
         %55 = OpAccessChain %40 %39 %17 %28
         %56 = OpLoad %6 %55
         %57 = OpConvertSToF %9 %56
         %58 = OpCompositeConstruct %10 %48 %51 %54 %57
               OpReturnValue %58
         %45 = OpLabel
               OpBranch %21
         %21 = OpLabel
               OpBranch %18
         %20 = OpLabel
         %60 = OpAccessChain %40 %39 %17 %17
         %61 = OpLoad %6 %60
         %62 = OpConvertSToF %9 %61
         %63 = OpCompositeConstruct %10 %62 %62 %62 %62
               OpReturnValue %63
               OpFunctionEnd
