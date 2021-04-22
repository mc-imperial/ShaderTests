; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 103
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %97
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 310
               OpName %4 "main"
               OpName %11 "computeColor(f1;"
               OpName %10 "c"
               OpName %15 "_GLF_global_loop_count"
               OpName %19 "GLF_live1gl_FragCoord"
               OpName %33 "_injected_loop_counter"
               OpName %54 "GLF_dead4k"
               OpName %74 "result"
               OpName %75 "i"
               OpName %86 "param"
               OpName %88 "d"
               OpName %90 "computePoint_inline_return_value_0"
               OpName %92 "point1"
               OpName %94 "mixed"
               OpName %97 "_GLF_color"
               OpDecorate %19 RelaxedPrecision
               OpDecorate %24 RelaxedPrecision
               OpDecorate %97 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %8 = OpTypeVector %6 3
          %9 = OpTypeFunction %8 %7
         %13 = OpTypeInt 32 1
         %14 = OpTypePointer Private %13
         %15 = OpVariable %14 Private
         %16 = OpConstant %13 0
         %17 = OpTypeVector %6 4
         %18 = OpTypePointer Private %17
         %19 = OpVariable %18 Private
         %20 = OpTypeInt 32 0
         %21 = OpConstant %20 1
         %22 = OpTypePointer Private %6
         %26 = OpConstant %13 1
         %27 = OpTypeBool
         %32 = OpTypePointer Function %13
         %39 = OpConstantTrue %27
         %41 = OpConstant %13 100
         %48 = OpConstant %6 1
         %70 = OpConstantComposite %8 %48 %48 %48
         %73 = OpTypePointer Function %8
         %96 = OpTypePointer Output %17
         %97 = OpVariable %96 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %74 = OpVariable %73 Function
         %75 = OpVariable %32 Function
         %86 = OpVariable %7 Function
         %88 = OpVariable %73 Function
         %90 = OpVariable %73 Function
         %92 = OpVariable %73 Function
         %94 = OpVariable %73 Function
               OpStore %15 %16
               OpStore %74 %70
               OpStore %75 %26
               OpBranch %76
         %76 = OpLabel
               OpLoopMerge %78 %79 None
               OpBranch %80
         %80 = OpLabel
         %81 = OpLoad %13 %15
         %82 = OpSLessThan %27 %81 %41
         %83 = OpLogicalAnd %27 %39 %82
               OpBranchConditional %83 %77 %78
         %77 = OpLabel
         %84 = OpLoad %13 %15
         %85 = OpIAdd %13 %84 %26
               OpStore %15 %85
               OpStore %86 %48
         %87 = OpFunctionCall %8 %11 %86
         %89 = OpLoad %8 %88
               OpStore %74 %89
               OpBranch %79
         %79 = OpLabel
               OpBranch %76
         %78 = OpLabel
         %91 = OpLoad %8 %74
               OpStore %90 %91
         %93 = OpLoad %8 %90
               OpStore %92 %93
         %95 = OpLoad %8 %92
               OpStore %94 %95
         %98 = OpLoad %8 %94
         %99 = OpCompositeExtract %6 %98 0
        %100 = OpCompositeExtract %6 %98 1
        %101 = OpCompositeExtract %6 %98 2
        %102 = OpCompositeConstruct %17 %99 %100 %101 %48
               OpStore %97 %102
               OpReturn
               OpFunctionEnd
         %11 = OpFunction %8 None %9
         %10 = OpFunctionParameter %7
         %12 = OpLabel
         %33 = OpVariable %32 Function
         %54 = OpVariable %32 Function
         %23 = OpAccessChain %22 %19 %21
         %24 = OpLoad %6 %23
         %25 = OpConvertFToS %13 %24
         %28 = OpSLessThan %27 %25 %26
               OpSelectionMerge %30 None
               OpBranchConditional %28 %29 %31
         %29 = OpLabel
               OpBranch %30
         %31 = OpLabel
               OpStore %33 %26
               OpBranch %34
         %34 = OpLabel
               OpLoopMerge %36 %37 None
               OpBranch %38
         %38 = OpLabel
         %40 = OpLoad %13 %15
         %42 = OpSLessThan %27 %40 %41
         %43 = OpLogicalAnd %27 %39 %42
               OpBranchConditional %43 %35 %36
         %35 = OpLabel
         %44 = OpLoad %13 %15
         %45 = OpIAdd %13 %44 %26
               OpStore %15 %45
         %46 = OpLoad %6 %10
         %47 = OpDPdy %6 %46
         %49 = OpFOrdLessThanEqual %27 %47 %48
               OpSelectionMerge %51 None
               OpBranchConditional %49 %50 %51
         %50 = OpLabel
         %52 = OpLoad %6 %10
         %53 = OpFAdd %6 %52 %48
               OpStore %10 %53
               OpBranch %51
         %51 = OpLabel
               OpBranch %37
         %37 = OpLabel
               OpBranch %34
         %36 = OpLabel
               OpStore %54 %26
               OpBranch %55
         %55 = OpLabel
               OpLoopMerge %57 %58 None
               OpBranch %59
         %59 = OpLabel
         %60 = OpLoad %13 %15
         %61 = OpSLessThan %27 %60 %41
         %62 = OpLogicalAnd %27 %39 %61
               OpBranchConditional %62 %56 %57
         %56 = OpLabel
         %63 = OpLoad %13 %15
         %64 = OpIAdd %13 %63 %26
               OpStore %15 %64
         %65 = OpLoad %6 %10
         %66 = OpFOrdGreaterThan %27 %65 %48
               OpSelectionMerge %68 None
               OpBranchConditional %66 %67 %68
         %67 = OpLabel
               OpBranch %57
         %68 = OpLabel
               OpBranch %58
         %58 = OpLabel
               OpBranch %55
         %57 = OpLabel
               OpBranch %30
         %30 = OpLabel
               OpReturnValue %70
               OpFunctionEnd
